import express, { Response, Request } from "express";
import asyncHandler from "express-async-handler";
import {
    Class,
    ClassRequestType,
    errors,
    generateClassData,
    DEFAULT_PAGE_SIE,
} from "../../shared";

//@desc  get classes
// @route   GET /classes
// @access public
export const getClasses = asyncHandler(async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.pageSize) || DEFAULT_PAGE_SIE;
    const searchTerm = req.query.searchTerm || "";
    const level = req.query.level || "";

    const conditions = [
        searchTerm && { $text: { $search: searchTerm } },
        level && { level: { $regex: level, $options: "i" } },
    ].filter(Boolean);

    // find all available classes
    await Class.paginate(
        conditions.length > 0 ? { $and: conditions } : {},
        { page, limit },
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500);
                throw new Error("Internal server error");
            }

            res.status(200).json(result);
        }
    );
});

//@desc  get class infomation
// @route GET classes/:id
// @access public
export const getClassInfo = asyncHandler(async (req: Request, res: Response) => {
    const classId = req.params.id;
    //TODO: there is no classId
    if (!classId) {
        res.status(errors.NOT_FOUND);
        throw new Error("Class id is not valid");
    }

    // TODO: find class in a database
    const existingClass = await Class.findById(classId);
    if (!existingClass) {
        res.status(errors.NOT_FOUND);
        throw new Error("Class does not exsit");
    }
    // TODO: successfully found a class
    res.status(200).json(existingClass);
});

//@desc  create a new class
// @route POST classes/create
// @access public
export const createClass = asyncHandler(async (req: ClassRequestType, res: Response) => {
    const { name, trainer, level, schedule, startDate, endDate, img } = req.body;
    // TODO: class data is not valid
    // if (!name || !trainer || !level || !schedule || !startDate || !endDate || !img) {
    //     res.status(errors.VALIDATION_ERROR);
    //     throw new Error("Class is invalid!");
    // }

    const classess = generateClassData();

    classess.forEach(async (item, index) => {
        // TODO: create a new class to the database
        const newcreatedClass = await Class.create(item);
        if (!newcreatedClass) {
            res.status(errors.VALIDATION_ERROR);
            throw new Error("Fail in creating new class!");
        }
    });

    // // TODO: create a new class to the database
    // const newcreatedClass = await Class.create({
    //     name,
    //     trainer,
    //     level,
    //     schedule,
    //     startDate,
    //     endDate,
    // });

    // TODO: Success in creating class
    res.status(200).json(classess);
});
