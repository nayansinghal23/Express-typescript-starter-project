import type { Request, Response } from "express";

import { InternalServerError } from "../utils/error/app.error.ts";

const pingController = (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "pong" });
    } catch (error) {
        throw new InternalServerError("An unexpected error occurred while processing the ping request.");
    }
}

export default pingController;