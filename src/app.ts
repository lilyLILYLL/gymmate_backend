import express from "express";
import { contactRoute } from "./contactRoute";

export const app = express();
const port = process.env.PORT || 3005;

app.get("/", (req, res) => {
    res.status(200).json("Welcome, your app is working well");
});

app.use("/", contactRoute);
app.listen(port, () => {
    console.log("Listening to", port);
});
