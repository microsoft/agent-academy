"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoubleIndexedKV = void 0;
class DoubleIndexedKV {
    constructor() {
        this.keyToValue = new Map();
        this.valueToKey = new Map();
    }
    set(key, value) {
        this.keyToValue.set(key, value);
        this.valueToKey.set(value, key);
    }
    getByKey(key) {
        return this.keyToValue.get(key);
    }
    getByValue(value) {
        return this.valueToKey.get(value);
    }
    clear() {
        this.keyToValue.clear();
        this.valueToKey.clear();
    }
}
exports.DoubleIndexedKV = DoubleIndexedKV;
//# sourceMappingURL=double-indexed-kv.js.map