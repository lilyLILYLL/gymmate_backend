import express from "express";
import { routes } from "./routes";
import { connectDb } from "./database";
import { port } from "../config";
import { errorHandler } from "./middlewares";

export const app = express();

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
