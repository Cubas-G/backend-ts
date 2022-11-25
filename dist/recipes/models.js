"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const recipeSchema = new mongoose_1.default.Schema({
    id: String,
    title: String,
    image: String,
    ingredients: [String],
    author: String,
    avatar: String,
    rating: String,
    time: String,
    trending: Boolean,
    popular: Boolean,
});
exports.Recipe = mongoose_1.default.model('Recipe', recipeSchema);
