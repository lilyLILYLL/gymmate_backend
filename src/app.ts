import express from "express";
import { contactRoute } from "./contactRoute";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use(contactRoute);
app.listen(port, () => {
    console.log("Listening to", port);
});
