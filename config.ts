import dotenv from "dotenv";

dotenv.config();

export const port = process.env.PORT || 5000;
export const ACCESS_TOKEN_KEY = process.env.ACCESS_TOKEN_KEY as string;
export const CONNECTION_STRING = process.env.CONNECTION_STRING as string;
