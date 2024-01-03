import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { GymPlan, errors, plans } from "../../shared";
//@desc  get plans
// @route   GET /plans
// @access public
export const getGymPlans = asyncHandler(async (req: Request, res: Response) => {
    const plans = await GymPlan.find();

    res.status(200).json(plans);
});

//@desc  get plans
// @route   POST /plans/create
// @access public
export const createPlans = asyncHandler(async (req: Request, res: Response) => {
    plans.forEach(async (plan, index) => {
        const newPlan = await GymPlan.create(plan);

        if (!newPlan) {
            res.status(errors.SERVER_ERROR);
            throw new Error("Internal Server Error");
        }
    });

    res.status(200).json(plans);
});
