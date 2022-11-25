"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("./exceptions");
const validateCategoryInput = (data) => {
    if (!data.name)
        throw new exceptions_1.CategoriesException("Property name is missing");
    if (data.name.length < 3)
        throw new exceptions_1.CategoriesException("Property name must be at least 3 characters");
    if (data.name.length > 20)
        throw new exceptions_1.CategoriesException("Property name must be at most 20 characters");
    if (!data.description)
        throw new exceptions_1.CategoriesException("Property description is missing");
};
exports.default = {
    validateCategoryInput
};
