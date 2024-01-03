import express, { Request, Response } from "express";
import asyncHander from "express-async-handler";
import { errors, User } from "../../shared";
//@desc  get classes

// @route   GET /classes
// @access public
export const registerAClass = asyncHander(async (req: Request, res: Response) => {
    const { classId, email } = req.body;

    if (!email || !classId) {
        res.status(errors.VALIDATION_ERROR);
        throw new Error("Emailid or class ID not valid");
    }

    await User.findOneAndUpdate(
        { email: email },
        { $push: { registedClassess: classId } },
        { new: true }
    )
        .then((res) => console.log(res))
        .catch((err) => {
            console.log(err);
            res.status(errors.SERVER_ERROR);
            throw new Error("Intrenal Server Error");
        });
});
