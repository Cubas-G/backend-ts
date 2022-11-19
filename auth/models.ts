import mongoose from "mongoose";
import { User as IUser } from "./interfaces";

const userSchema = new mongoose.Schema<IUser>({
    id: String,
    name: String,
    username: {
        type: String,
        unique: true
    },
    password: String,
    token: String,
    profile_id: String
});

export const User = mongoose.model<IUser>('User', userSchema);