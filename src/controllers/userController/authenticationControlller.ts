import express, { Response, Request } from "express";
import { User, AuthenticationTypeRequest, errors } from "../../shared";
import { ACCESS_TOKEN_KEY } from "../../../config";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

//@desc  register
// @route POST api/signup
// @access public
export const register = asyncHandler(
    async (req: AuthenticationTypeRequest, res: Response) => {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            res.status(400);
            throw new Error("All fields are mandatory");
        }
        // TODO: check if username exists in the database
        const existingUser = await User.findOne({ email });

        // TODO: if yes, throws an error
        if (existingUser) {
            res.status(400);
            throw new Error("Email's already been used!");
        }
        // TODO: if not, create a new user (with hashed password)
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ email, password: hashedPassword, username });

        if (!newUser) {
            res.status(400);
            throw new Error("User Data is not valid");
        }

        res.status(201).json({ id: newUser.id, email, username });
    }
);

//@desc  login
// @route POST api/login
// @access public
export const login = asyncHandler(
    async (req: AuthenticationTypeRequest, res: Response) => {
        const { email, password } = req.body;

        // TODO: check if email exists in the database
        const user = await User.findOne({ email });

        // TODO: if yes, compare provided password to hashedPassword
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ user: { email, password } }, ACCESS_TOKEN_KEY);

            res.status(200).json({ token });
        } else {
            res.status(errors.VALIDATION_ERROR);
            throw new Error("Email or passord is not correct");
        }

        // TODO: if no, throw an error
        res.status(errors.NOT_FOUND);
        throw new Error("Email is not found");
    }
);

//@desc  get current user
// @route GET /current
// @access private

export const getCurrentUser = asyncHandler(
    async (req: AuthenticationTypeRequest, res: Response) => {
        // find userInfo by email
        const { email, password } = req.user;

        const user = await User.findOne({ email });

        // Send user's info
        res.status(200).json({
            email: user.email,
            registedClass: user.registedClassess || [],
            username: user.username,
        });
    }
);

//@desc  changePassword
// @route PUT api/changePassword
// @access private
