import express from "express";
import { authenticationRoute } from "./authenticationRoute";

export const routes = express.Router();

routes.use(authenticationRoute);
