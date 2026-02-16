"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findArr = exports.includes = exports.forEach = exports.find = void 0;
function valuesOfObj(record) {
    if ('values' in Object) {
        // eslint-disable-next-line es5/no-es6-methods
        return Object.values(record);
    }
    const values = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in record) {
        if (record.hasOwnProperty(key)) {
            values.push(record[key]);
        }
    }
    return values;
}
function find(record, predicate) {
    const values = valuesOfObj(record);
    if ('find' in values) {
        // eslint-disable-next-line es5/no-es6-methods
        return values.find(predicate);
    }
    const valuesNotNever = values;
    for (let i = 0; i < valuesNotNever.length; i++) {
        const value = valuesNotNever[i];
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
}
exports.find = find;
function forEach(record, run) {
    Object.entries(record).forEach(([key, value]) => run(value, key));
}
exports.forEach = forEach;
function includes(arr, value) {
    return arr.indexOf(value) !== -1;
}
exports.includes = includes;
function findArr(record, predicate) {
    for (let i = 0; i < record.length; i++) {
        const value = record[i];
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
}
exports.findArr = findArr;
//# sourceMappingURL=util.js.map