import express from "express";

export const contactRoute = express.Router();

contactRoute.get("/lilly", (req, res) => {
    res.send("Hello fgdjgj");
});
