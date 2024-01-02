import { Response, Request, NextFunction } from "express";
import { errors } from "../shared";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = res.statusCode || 500;
    switch (statusCode) {
        case errors.VALIDATION_ERROR:
            res.json({
                titlte: "Validation Failed",
                message: err.message,
            });

            break;

        case errors.NOT_FOUND:
            res.json({
                titlte: "Not Found",
                message: err.message,
            });
            break;

        case errors.UNAUTHORISED:
            res.json({
                titlte: "Unauthorised",
                message: err.message,
            });
            break;

        case errors.FORBIDEN:
            res.json({
                titlte: "Forbiden",
                message: err.message,
            });
            break;
        case errors.SERVER_ERROR:
            res.json({
                titlte: "Server Error",
                message: err.message,
            });
            break;
        default:
            break;

            next();
    }
};
