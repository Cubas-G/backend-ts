import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    username: {
        type: String,
        unique: true
    },
    password: String
});

export const User = mongoose.model('User', userSchema);