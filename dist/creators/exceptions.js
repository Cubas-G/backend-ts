"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesException = void 0;
class CategoriesException extends Error {
    constructor(message) {
        super(message);
        this.name = 'CategoriesException';
    }
}
exports.CategoriesException = CategoriesException;
