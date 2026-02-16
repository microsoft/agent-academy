"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDeep = exports.getDeep = void 0;
const is_js_1 = require("./is.cjs");
const util_js_1 = require("./util.cjs");
const getNthKey = (value, n) => {
    if (n > value.size)
        throw new Error('index out of bounds');
    const keys = value.keys();
    while (n > 0) {
        keys.next();
        n--;
    }
    return keys.next().value;
};
function validatePath(path) {
    if (util_js_1.includes(path, '__proto__')) {
        throw new Error('__proto__ is not allowed as a property');
    }
    if (util_js_1.includes(path, 'prototype')) {
        throw new Error('prototype is not allowed as a property');
    }
    if (util_js_1.includes(path, 'constructor')) {
        throw new Error('constructor is not allowed as a property');
    }
}
const getDeep = (object, path) => {
    validatePath(path);
    for (let i = 0; i < path.length; i++) {
        const key = path[i];
        if (is_js_1.isSet(object)) {
            object = getNthKey(object, +key);
        }
        else if (is_js_1.isMap(object)) {
            const row = +key;
            const type = +path[++i] === 0 ? 'key' : 'value';
            const keyOfRow = getNthKey(object, row);
            switch (type) {
                case 'key':
                    object = keyOfRow;
                    break;
                case 'value':
                    object = object.get(keyOfRow);
                    break;
            }
        }
        else {
            object = object[key];
        }
    }
    return object;
};
exports.getDeep = getDeep;
const setDeep = (object, path, mapper) => {
    validatePath(path);
    if (path.length === 0) {
        return mapper(object);
    }
    let parent = object;
    for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        if (is_js_1.isArray(parent)) {
            const index = +key;
            parent = parent[index];
        }
        else if (is_js_1.isPlainObject(parent)) {
            parent = parent[key];
        }
        else if (is_js_1.isSet(parent)) {
            const row = +key;
            parent = getNthKey(parent, row);
        }
        else if (is_js_1.isMap(parent)) {
            const isEnd = i === path.length - 2;
            if (isEnd) {
                break;
            }
            const row = +key;
            const type = +path[++i] === 0 ? 'key' : 'value';
            const keyOfRow = getNthKey(parent, row);
            switch (type) {
                case 'key':
                    parent = keyOfRow;
                    break;
                case 'value':
                    parent = parent.get(keyOfRow);
                    break;
            }
        }
    }
    const lastKey = path[path.length - 1];
    if (is_js_1.isArray(parent)) {
        parent[+lastKey] = mapper(parent[+lastKey]);
    }
    else if (is_js_1.isPlainObject(parent)) {
        parent[lastKey] = mapper(parent[lastKey]);
    }
    if (is_js_1.isSet(parent)) {
        const oldValue = getNthKey(parent, +lastKey);
        const newValue = mapper(oldValue);
        if (oldValue !== newValue) {
            parent.delete(oldValue);
            parent.add(newValue);
        }
    }
    if (is_js_1.isMap(parent)) {
        const row = +path[path.length - 2];
        const keyToRow = getNthKey(parent, row);
        const type = +lastKey === 0 ? 'key' : 'value';
        switch (type) {
            case 'key': {
                const newKey = mapper(keyToRow);
                parent.set(newKey, parent.get(keyToRow));
                if (newKey !== keyToRow) {
                    parent.delete(keyToRow);
                }
                break;
            }
            case 'value': {
                parent.set(keyToRow, mapper(parent.get(keyToRow)));
                break;
            }
        }
    }
    return object;
};
exports.setDeep = setDeep;
//# sourceMappingURL=accessDeep.js.map