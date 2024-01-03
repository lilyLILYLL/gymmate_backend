import express from "express";
import { createPlans, getGymPlans } from "../controllers";

export const gymPlanRoute = express.Router();

gymPlanRoute.route("/plans").get(getGymPlans);
gymPlanRoute.route("/plans/create").post(createPlans);
