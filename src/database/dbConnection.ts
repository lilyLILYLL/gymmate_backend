import mongoose from "mongoose";
import { CONNECTION_STRING } from "../../config";

export const connectDb = async () => {
    try {
        const connection = await mongoose.connect(CONNECTION_STRING);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};
