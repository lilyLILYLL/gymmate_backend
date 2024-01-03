import express from "express";
import { createClass, getClasses, getClassInfo } from "../controllers";
export const classesRoute = express.Router();

classesRoute.route("/classes").get(getClasses);
classesRoute.route("/class/create").post(createClass);
classesRoute.route("/classes/:id").get(getClassInfo);
