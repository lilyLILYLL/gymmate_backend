import express from "express";
import { userRoute } from "./userRoute";
import { galleryRoute } from "./galleryRoute";
import { classesRoute } from "./classesRoute";
import { gymPlanRoute } from "./gymPlanRoute";
export const routes = express.Router();

routes.use(userRoute);
routes.use(galleryRoute);
routes.use(classesRoute);
routes.use(gymPlanRoute);
