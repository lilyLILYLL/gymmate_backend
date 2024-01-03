import mongoose from "mongoose";
import { UserFormData } from "../types";
const UserModel = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    registeredClasses: [String],
});

export const User = mongoose.model<UserFormData>("User", UserModel);
