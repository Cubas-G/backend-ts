import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: String,
    name: String,
    price: Number,
    password: String,
    categories: String
});

export const Product = mongoose.model('Product', productSchema);