import express, { Request, Response } from "express";
import { imgs } from "../shared";
export const galleryRoute = express.Router();

//@desc  get images in galler pages
// @route GET /galleryImages
// @access public
galleryRoute.route("/galleryImages").get(async (req: Request, res: Response) => {
    const pageNumber = Number(req.query.pageNumber) || 1;
    const pageSize = Number(req.query.pageSize);

    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageNumber * pageSize;

    res.status(200).json(imgs.slice(startIndex, endIndex));
});
