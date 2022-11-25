"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Creator = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const creatorSchema = new mongoose_1.default.Schema({
    id: String,
    name: String,
    avatar: String,
    biography: String,
    recipes_count: Number,
    videos_count: Number,
    followers: Number,
    following: Number
});
exports.Creator = mongoose_1.default.model('Creator', creatorSchema);
