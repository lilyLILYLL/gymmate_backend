import mongoose from "mongoose";
import { AuthenticationFormData } from "../types";
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
});

export const User = mongoose.model<AuthenticationFormData>("User", UserModel);
