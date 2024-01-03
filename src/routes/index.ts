import express from "express";
import { authenticationRoute } from "./authenticationRoute";
import { galleryRoute } from "./galleryRoute";
import { classesRoute } from "./classesRoute";

export const routes = express.Router();

routes.use(authenticationRoute);
routes.use(galleryRoute);
routes.use(classesRoute);
