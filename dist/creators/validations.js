"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("./exceptions");
const validateCreatorInput = (data) => {
    if (!data.name)
        throw new exceptions_1.CategoriesException("Property title is missing");
    if (data.name.length < 3)
        throw new exceptions_1.CategoriesException("Property title must be at least 3 characters");
    if (data.name.length > 30)
        throw new exceptions_1.CategoriesException("Property title must be at most 20 characters");
    if (!data.avatar)
        throw new exceptions_1.CategoriesException("Property image is missing");
};
exports.default = {
    validateCreatorInput
};
