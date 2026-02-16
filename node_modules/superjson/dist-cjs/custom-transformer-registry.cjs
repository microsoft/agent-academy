"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomTransformerRegistry = void 0;
const util_js_1 = require("./util.cjs");
class CustomTransformerRegistry {
    constructor() {
        this.transfomers = {};
    }
    register(transformer) {
        this.transfomers[transformer.name] = transformer;
    }
    findApplicable(v) {
        return util_js_1.find(this.transfomers, transformer => transformer.isApplicable(v));
    }
    findByName(name) {
        return this.transfomers[name];
    }
}
exports.CustomTransformerRegistry = CustomTransformerRegistry;
//# sourceMappingURL=custom-transformer-registry.js.map