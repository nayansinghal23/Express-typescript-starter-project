import type { NextFunction, Request, Response } from "express";
import type { AnyZodObject } from "zod/v3";

export const validateRequestBody = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body); // Validate the request body against the schema asynchronously
            next();
        } catch (error) {
            res.status(400).json({ message: "Invalid request body", success: false, error });
        }
    }
}

export const validateQueryParams = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.query); // Validate the query parameters against the schema asynchronously
            next();
        } catch (error) {
            res.status(400).json({ message: "Invalid query parameters", success: false, error });
        }
    }
}