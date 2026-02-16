"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walker = exports.generateReferentialEqualityAnnotations = exports.applyReferentialEqualityAnnotations = exports.applyValueAnnotations = void 0;
const is_js_1 = require("./is.cjs");
const pathstringifier_js_1 = require("./pathstringifier.cjs");
const transformer_js_1 = require("./transformer.cjs");
const util_js_1 = require("./util.cjs");
const pathstringifier_js_2 = require("./pathstringifier.cjs");
const accessDeep_js_1 = require("./accessDeep.cjs");
const enableLegacyPaths = (version) => version < 1;
function traverse(tree, walker, version, origin = []) {
    if (!tree) {
        return;
    }
    const legacyPaths = enableLegacyPaths(version);
    if (!is_js_1.isArray(tree)) {
        util_js_1.forEach(tree, (subtree, key) => traverse(subtree, walker, version, [
            ...origin,
            ...pathstringifier_js_2.parsePath(key, legacyPaths),
        ]));
        return;
    }
    const [nodeValue, children] = tree;
    if (children) {
        util_js_1.forEach(children, (child, key) => {
            traverse(child, walker, version, [
                ...origin,
                ...pathstringifier_js_2.parsePath(key, legacyPaths),
            ]);
        });
    }
    walker(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, version, superJson) {
    traverse(annotations, (type, path) => {
        plain = accessDeep_js_1.setDeep(plain, path, v => transformer_js_1.untransformValue(v, type, superJson));
    }, version);
    return plain;
}
exports.applyValueAnnotations = applyValueAnnotations;
function applyReferentialEqualityAnnotations(plain, annotations, version) {
    const legacyPaths = enableLegacyPaths(version);
    function apply(identicalPaths, path) {
        const object = accessDeep_js_1.getDeep(plain, pathstringifier_js_2.parsePath(path, legacyPaths));
        identicalPaths
            .map(path => pathstringifier_js_2.parsePath(path, legacyPaths))
            .forEach(identicalObjectPath => {
            plain = accessDeep_js_1.setDeep(plain, identicalObjectPath, () => object);
        });
    }
    if (is_js_1.isArray(annotations)) {
        const [root, other] = annotations;
        root.forEach(identicalPath => {
            plain = accessDeep_js_1.setDeep(plain, pathstringifier_js_2.parsePath(identicalPath, legacyPaths), () => plain);
        });
        if (other) {
            util_js_1.forEach(other, apply);
        }
    }
    else {
        util_js_1.forEach(annotations, apply);
    }
    return plain;
}
exports.applyReferentialEqualityAnnotations = applyReferentialEqualityAnnotations;
const isDeep = (object, superJson) => is_js_1.isPlainObject(object) ||
    is_js_1.isArray(object) ||
    is_js_1.isMap(object) ||
    is_js_1.isSet(object) ||
    is_js_1.isError(object) ||
    transformer_js_1.isInstanceOfRegisteredClass(object, superJson);
function addIdentity(object, path, identities) {
    const existingSet = identities.get(object);
    if (existingSet) {
        existingSet.push(path);
    }
    else {
        identities.set(object, [path]);
    }
}
function generateReferentialEqualityAnnotations(identitites, dedupe) {
    const result = {};
    let rootEqualityPaths = undefined;
    identitites.forEach(paths => {
        if (paths.length <= 1) {
            return;
        }
        // if we're not deduping, all of these objects continue existing.
        // putting the shortest path first makes it easier to parse for humans
        // if we're deduping though, only the first entry will still exist, so we can't do this optimisation.
        if (!dedupe) {
            paths = paths
                .map(path => path.map(String))
                .sort((a, b) => a.length - b.length);
        }
        const [representativePath, ...identicalPaths] = paths;
        if (representativePath.length === 0) {
            rootEqualityPaths = identicalPaths.map(pathstringifier_js_1.stringifyPath);
        }
        else {
            result[pathstringifier_js_1.stringifyPath(representativePath)] = identicalPaths.map(pathstringifier_js_1.stringifyPath);
        }
    });
    if (rootEqualityPaths) {
        if (is_js_1.isEmptyObject(result)) {
            return [rootEqualityPaths];
        }
        else {
            return [rootEqualityPaths, result];
        }
    }
    else {
        return is_js_1.isEmptyObject(result) ? undefined : result;
    }
}
exports.generateReferentialEqualityAnnotations = generateReferentialEqualityAnnotations;
const walker = (object, identities, superJson, dedupe, path = [], objectsInThisPath = [], seenObjects = new Map()) => {
    const primitive = is_js_1.isPrimitive(object);
    if (!primitive) {
        addIdentity(object, path, identities);
        const seen = seenObjects.get(object);
        if (seen) {
            // short-circuit result if we've seen this object before
            return dedupe
                ? {
                    transformedValue: null,
                }
                : seen;
        }
    }
    if (!isDeep(object, superJson)) {
        const transformed = transformer_js_1.transformValue(object, superJson);
        const result = transformed
            ? {
                transformedValue: transformed.value,
                annotations: [transformed.type],
            }
            : {
                transformedValue: object,
            };
        if (!primitive) {
            seenObjects.set(object, result);
        }
        return result;
    }
    if (util_js_1.includes(objectsInThisPath, object)) {
        // prevent circular references
        return {
            transformedValue: null,
        };
    }
    const transformationResult = transformer_js_1.transformValue(object, superJson);
    const transformed = transformationResult?.value ?? object;
    const transformedValue = is_js_1.isArray(transformed) ? [] : {};
    const innerAnnotations = {};
    util_js_1.forEach(transformed, (value, index) => {
        if (index === '__proto__' ||
            index === 'constructor' ||
            index === 'prototype') {
            throw new Error(`Detected property ${index}. This is a prototype pollution risk, please remove it from your object.`);
        }
        const recursiveResult = exports.walker(value, identities, superJson, dedupe, [...path, index], [...objectsInThisPath, object], seenObjects);
        transformedValue[index] = recursiveResult.transformedValue;
        if (is_js_1.isArray(recursiveResult.annotations)) {
            innerAnnotations[pathstringifier_js_1.escapeKey(index)] = recursiveResult.annotations;
        }
        else if (is_js_1.isPlainObject(recursiveResult.annotations)) {
            util_js_1.forEach(recursiveResult.annotations, (tree, key) => {
                innerAnnotations[pathstringifier_js_1.escapeKey(index) + '.' + key] = tree;
            });
        }
    });
    const result = is_js_1.isEmptyObject(innerAnnotations)
        ? {
            transformedValue,
            annotations: !!transformationResult
                ? [transformationResult.type]
                : undefined,
        }
        : {
            transformedValue,
            annotations: !!transformationResult
                ? [transformationResult.type, innerAnnotations]
                : innerAnnotations,
        };
    if (!primitive) {
        seenObjects.set(object, result);
    }
    return result;
};
exports.walker = walker;
//# sourceMappingURL=plainer.js.map