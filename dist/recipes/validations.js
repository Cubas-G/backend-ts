"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceptions_1 = require("./exceptions");
const validateRecipeInput = (data) => {
    if (!data.title)
        throw new exceptions_1.CategoriesException("Property title is missing");
    if (data.title.length < 3)
        throw new exceptions_1.CategoriesException("Property title must be at least 3 characters");
    if (data.title.length > 30)
        throw new exceptions_1.CategoriesException("Property title must be at most 20 characters");
    if (!data.image)
        throw new exceptions_1.CategoriesException("Property image is missing");
};
exports.default = {
    validateRecipeInput
};
