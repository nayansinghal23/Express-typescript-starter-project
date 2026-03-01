import type { Response, Request } from "express";

import type { AppError } from "../utils/error/app.error.ts";

export const genericErrorHandler = (error: AppError, req: Request, res: Response) => {
    res.status(error.statusCode).json({ message: error.message, success: false });
}