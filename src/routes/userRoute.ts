import express from "express";
import { register, login, getCurrentUser, registerAClass } from "../controllers";
import { validateToken } from "../middlewares/validateToken";
export const userRoute = express.Router();

userRoute.route("/signup").post(register);
userRoute.route("/login").post(login);
userRoute.route("/current").get(validateToken, getCurrentUser);

userRoute.route("/registerAClass").post(registerAClass);
