import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    slug: String
});

export const Category = mongoose.model('Category', categorySchema);