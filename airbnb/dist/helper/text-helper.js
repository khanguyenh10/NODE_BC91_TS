"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPassword = exports.toBoolean = void 0;
const toBoolean = (val) => {
    if (typeof val === 'boolean')
        return val;
    if (val === 'true')
        return true;
    if (val === 'false')
        return false;
    return Boolean(val);
};
exports.toBoolean = toBoolean;
const isPassword = (value) => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(value);
};
exports.isPassword = isPassword;
