"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("./exceptions");
const validateLoginInput = (data) => {
    if (!data.username)
        throw new exceptions_1.AuthException("Property username is missing");
    if (!data.password)
        throw new exceptions_1.AuthException("Property password is missing");
};
const validateRegisterInput = (data) => {
    if (!data.name)
        throw new exceptions_1.AuthException("Property name is missing");
    if (!data.username)
        throw new exceptions_1.AuthException("Property username is missing");
    if (!data.password)
        throw new exceptions_1.AuthException("Property password is missing");
};
exports.default = {
    validateLoginInput,
    validateRegisterInput
};
