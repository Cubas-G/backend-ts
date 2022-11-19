import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
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

export const Recipe = mongoose.model('Recipe', recipeSchema);