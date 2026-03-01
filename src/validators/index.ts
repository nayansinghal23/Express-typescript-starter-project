import type { NextFunction, Request, Response } from "express";
import type { AnyZodObject } from "zod/v3";

import { BadRequestError } from "../utils/error/app.error.ts";
import logger from "../config/logger.config.ts";

export const validateRequestBody = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            logger.info("Validating request body against schema...");
            await schema.parseAsync(req.body); // Validate the request body against the schema asynchronously
            logger.info("Request body validated successfully against schema.");
            next();
        } catch (error) {
            logger.error("Request body validation failed against schema.");
            const badRequestError = new BadRequestError("Invalid request body");
            res.status(badRequestError.statusCode).json({ message: badRequestError.message, success: false });
        }
    }
}

export const validateQueryParams = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.query); // Validate the query parameters against the schema asynchronously
            next();
        } catch (error) {
            const badRequestError = new BadRequestError("Invalid query parameters");
            res.status(badRequestError.statusCode).json({ message: badRequestError.message, success: false });
        }
    }
}