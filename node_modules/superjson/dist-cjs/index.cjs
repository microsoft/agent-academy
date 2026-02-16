"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowErrorProps = exports.registerSymbol = exports.registerCustom = exports.registerClass = exports.parse = exports.stringify = exports.deserialize = exports.serialize = exports.SuperJSON = void 0;
const class_registry_js_1 = require("./class-registry.cjs");
const registry_js_1 = require("./registry.cjs");
const custom_transformer_registry_js_1 = require("./custom-transformer-registry.cjs");
const plainer_js_1 = require("./plainer.cjs");
const copy_anything_1 = require("copy-anything");
class SuperJSON {
    /**
     * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
     */
    constructor({ dedupe = false, } = {}) {
        this.classRegistry = new class_registry_js_1.ClassRegistry();
        this.symbolRegistry = new registry_js_1.Registry(s => s.description ?? '');
        this.customTransformerRegistry = new custom_transformer_registry_js_1.CustomTransformerRegistry();
        this.allowedErrorProps = [];
        this.dedupe = dedupe;
    }
    serialize(object) {
        const identities = new Map();
        const output = plainer_js_1.walker(object, identities, this, this.dedupe);
        const res = {
            json: output.transformedValue,
        };
        if (output.annotations) {
            res.meta = {
                ...res.meta,
                values: output.annotations,
            };
        }
        const equalityAnnotations = plainer_js_1.generateReferentialEqualityAnnotations(identities, this.dedupe);
        if (equalityAnnotations) {
            res.meta = {
                ...res.meta,
                referentialEqualities: equalityAnnotations,
            };
        }
        if (res.meta)
            res.meta.v = 1;
        return res;
    }
    deserialize(payload, options) {
        const { json, meta } = payload;
        let result = options?.inPlace ? json : copy_anything_1.copy(json);
        if (meta?.values) {
            result = plainer_js_1.applyValueAnnotations(result, meta.values, meta.v ?? 0, this);
        }
        if (meta?.referentialEqualities) {
            result = plainer_js_1.applyReferentialEqualityAnnotations(result, meta.referentialEqualities, meta.v ?? 0);
        }
        return result;
    }
    stringify(object) {
        return JSON.stringify(this.serialize(object));
    }
    parse(string) {
        return this.deserialize(JSON.parse(string), { inPlace: true });
    }
    registerClass(v, options) {
        this.classRegistry.register(v, options);
    }
    registerSymbol(v, identifier) {
        this.symbolRegistry.register(v, identifier);
    }
    registerCustom(transformer, name) {
        this.customTransformerRegistry.register({
            name,
            ...transformer,
        });
    }
    allowErrorProps(...props) {
        this.allowedErrorProps.push(...props);
    }
}
exports.default = SuperJSON;
exports.SuperJSON = SuperJSON;
SuperJSON.defaultInstance = new SuperJSON();
SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
exports.serialize = SuperJSON.serialize;
exports.deserialize = SuperJSON.deserialize;
exports.stringify = SuperJSON.stringify;
exports.parse = SuperJSON.parse;
exports.registerClass = SuperJSON.registerClass;
exports.registerCustom = SuperJSON.registerCustom;
exports.registerSymbol = SuperJSON.registerSymbol;
exports.allowErrorProps = SuperJSON.allowErrorProps;
//# sourceMappingURL=index.js.map