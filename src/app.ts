import express from "express";
import { routes } from "./routes";
import { connectDb } from "./database";
import { port } from "../config";
import { errorHandler } from "./middlewares";
import cors from "cors";

export const app = express();

// middleware: allows server to accept api calls from frontend
app.use(cors());

app.use(express.json());

// connect database
connectDb();

// routes
app.use("/", routes);

app.get("/", (req, res) => {
    res.status(200).json("Welcome, your app is working well");
});

// error handler
app.use(errorHandler);

// listen to a port
app.listen(port, () => {
    console.log("Listening to", port);
});
