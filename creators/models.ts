import mongoose from "mongoose";

const creatorSchema = new mongoose.Schema({
    id: String,
    name: String,
    avatar: String,
    biography: String,
    recipes_count: Number,
    videos_count: Number,
    followers: Number,
    following: Number
});

export const Creator = mongoose.model('Creator', creatorSchema);