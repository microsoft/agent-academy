"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isURL = exports.isTypedArray = exports.isInfinite = exports.isBigint = exports.isPrimitive = exports.isNaNValue = exports.isError = exports.isDate = exports.isSymbol = exports.isSet = exports.isMap = exports.isRegExp = exports.isBoolean = exports.isNumber = exports.isString = exports.isArray = exports.isEmptyObject = exports.isPlainObject = exports.isNull = exports.isUndefined = void 0;
const getType = (payload) => Object.prototype.toString.call(payload).slice(8, -1);
const isUndefined = (payload) => typeof payload === 'undefined';
exports.isUndefined = isUndefined;
const isNull = (payload) => payload === null;
exports.isNull = isNull;
const isPlainObject = (payload) => {
    if (typeof payload !== 'object' || payload === null)
        return false;
    if (payload === Object.prototype)
        return false;
    if (Object.getPrototypeOf(payload) === null)
        return true;
    return Object.getPrototypeOf(payload) === Object.prototype;
};
exports.isPlainObject = isPlainObject;
const isEmptyObject = (payload) => exports.isPlainObject(payload) && Object.keys(payload).length === 0;
exports.isEmptyObject = isEmptyObject;
const isArray = (payload) => Array.isArray(payload);
exports.isArray = isArray;
const isString = (payload) => typeof payload === 'string';
exports.isString = isString;
const isNumber = (payload) => typeof payload === 'number' && !isNaN(payload);
exports.isNumber = isNumber;
const isBoolean = (payload) => typeof payload === 'boolean';
exports.isBoolean = isBoolean;
const isRegExp = (payload) => payload instanceof RegExp;
exports.isRegExp = isRegExp;
const isMap = (payload) => payload instanceof Map;
exports.isMap = isMap;
const isSet = (payload) => payload instanceof Set;
exports.isSet = isSet;
const isSymbol = (payload) => getType(payload) === 'Symbol';
exports.isSymbol = isSymbol;
const isDate = (payload) => payload instanceof Date && !isNaN(payload.valueOf());
exports.isDate = isDate;
const isError = (payload) => payload instanceof Error;
exports.isError = isError;
const isNaNValue = (payload) => typeof payload === 'number' && isNaN(payload);
exports.isNaNValue = isNaNValue;
const isPrimitive = (payload) => exports.isBoolean(payload) ||
    exports.isNull(payload) ||
    exports.isUndefined(payload) ||
    exports.isNumber(payload) ||
    exports.isString(payload) ||
    exports.isSymbol(payload);
exports.isPrimitive = isPrimitive;
const isBigint = (payload) => typeof payload === 'bigint';
exports.isBigint = isBigint;
const isInfinite = (payload) => payload === Infinity || payload === -Infinity;
exports.isInfinite = isInfinite;
const isTypedArray = (payload) => ArrayBuffer.isView(payload) && !(payload instanceof DataView);
exports.isTypedArray = isTypedArray;
const isURL = (payload) => payload instanceof URL;
exports.isURL = isURL;
//# sourceMappingURL=is.js.map