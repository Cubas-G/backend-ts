import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    id: String,
    title: String,
    image: String,
    ingredients: [String]
});

export const Recipe = mongoose.model('Recipe', recipeSchema);