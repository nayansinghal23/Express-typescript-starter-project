import type { Request, Response } from "express";

const pingController = (req: Request, res: Response) => {
    res.send('pong');
}

export default pingController;