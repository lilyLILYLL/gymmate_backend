import { NextFunction, Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { AuthenticationTypeRequest } from "../shared";
import jwt from "jsonwebtoken";
import { ACCESS_TOKEN_KEY } from "../../config";

export const validateToken = asyncHandler(
    async (req: AuthenticationTypeRequest, res: Response, next: NextFunction) => {
        // TODO: get token from authHeader
        const authHeader = req.headers.authorization;

        if (authHeader && authHeader.startsWith("Bearer")) {
            const token = authHeader.split(" ")[1];

            // TODO: decode the token
            jwt.verify(token, ACCESS_TOKEN_KEY, (err, decoded: jwt.JwtPayload) => {
                if (err) {
                    
                    res.status(401);
                    throw new Error("User is not authorised");
                }

                req.user = decoded.user;
                next();
            });
        } else {
            res.status(401);
            throw new Error("User is not authorised or token is missing");
        }
    }
);
