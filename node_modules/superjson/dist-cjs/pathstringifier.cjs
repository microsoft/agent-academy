"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePath = exports.stringifyPath = exports.escapeKey = void 0;
const escapeKey = (key) => key.replace(/\\/g, '\\\\').replace(/\./g, '\\.');
exports.escapeKey = escapeKey;
const stringifyPath = (path) => path
    .map(String)
    .map(exports.escapeKey)
    .join('.');
exports.stringifyPath = stringifyPath;
const parsePath = (string, legacyPaths) => {
    const result = [];
    let segment = '';
    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (!legacyPaths && char === '\\') {
            const escaped = string.charAt(i + 1);
            if (escaped === '\\') {
                segment += '\\';
                i++;
                continue;
            }
            else if (escaped !== '.') {
                throw Error('invalid path');
            }
        }
        const isEscapedDot = char === '\\' && string.charAt(i + 1) === '.';
        if (isEscapedDot) {
            segment += '.';
            i++;
            continue;
        }
        const isEndOfSegment = char === '.';
        if (isEndOfSegment) {
            result.push(segment);
            segment = '';
            continue;
        }
        segment += char;
    }
    const lastSegment = segment;
    result.push(lastSegment);
    return result;
};
exports.parsePath = parsePath;
//# sourceMappingURL=pathstringifier.js.map