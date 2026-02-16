"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
const double_indexed_kv_js_1 = require("./double-indexed-kv.cjs");
class Registry {
    constructor(generateIdentifier) {
        this.generateIdentifier = generateIdentifier;
        this.kv = new double_indexed_kv_js_1.DoubleIndexedKV();
    }
    register(value, identifier) {
        if (this.kv.getByValue(value)) {
            return;
        }
        if (!identifier) {
            identifier = this.generateIdentifier(value);
        }
        this.kv.set(identifier, value);
    }
    clear() {
        this.kv.clear();
    }
    getIdentifier(value) {
        return this.kv.getByValue(value);
    }
    getValue(identifier) {
        return this.kv.getByKey(identifier);
    }
}
exports.Registry = Registry;
//# sourceMappingURL=registry.js.map