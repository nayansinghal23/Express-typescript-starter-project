import type { Request, Response } from "express";

import { InternalServerError } from "../utils/error/app.error.ts";
import logger from "../config/logger.config.ts";

const pingController = (req: Request, res: Response) => {
    try {
        logger.info("Processing ping request...");
        res.status(200).json({ message: "pong" });
    } catch (error) {
        logger.error("An unexpected error occurred while processing the ping request.");
        throw new InternalServerError("An unexpected error occurred while processing the ping request.");
    }
}

export default pingController;