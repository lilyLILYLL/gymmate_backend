import express from "express";
import { contactRoute } from "./contactRoute";

export const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.status(200).json("Welcome, your app is working well");
});

app.use("/", contactRoute);
app.listen(PORT, "0.0.0.0", () => {
    console.log("Listening to", PORT);
});
