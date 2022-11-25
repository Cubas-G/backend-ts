"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthException = void 0;
class AuthException extends Error {
    constructor(message) {
        super(message);
        this.name = 'AuthException';
    }
}
exports.AuthException = AuthException;
