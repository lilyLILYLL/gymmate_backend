import express from "express";
import { register, login, getCurrentUser } from "../controllers";
import { validateToken } from "../middlewares/validateToken";
export const authenticationRoute = express.Router();

authenticationRoute.route("/signup").post(register);
authenticationRoute.route("/login").post(login);
authenticationRoute.route("/current").get(validateToken, getCurrentUser);
