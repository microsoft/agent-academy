"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassRegistry = void 0;
const registry_js_1 = require("./registry.cjs");
class ClassRegistry extends registry_js_1.Registry {
    constructor() {
        super(c => c.name);
        this.classToAllowedProps = new Map();
    }
    register(value, options) {
        if (typeof options === 'object') {
            if (options.allowProps) {
                this.classToAllowedProps.set(value, options.allowProps);
            }
            super.register(value, options.identifier);
        }
        else {
            super.register(value, options);
        }
    }
    getAllowedProps(value) {
        return this.classToAllowedProps.get(value);
    }
}
exports.ClassRegistry = ClassRegistry;
//# sourceMappingURL=class-registry.js.map