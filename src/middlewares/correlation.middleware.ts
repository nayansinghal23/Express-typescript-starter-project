import type { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid'

import { asyncLocalStorage } from '../utils/helpers/request.helpers.ts';

// Correlation ID to attach to a unique identifier to each request for tracing and logging for a particular request.
// Each correlation ID will represent activity by unique user.
export const attachCorrelationId = (req: Request, res: Response, next: NextFunction) => {
    const correlationId = uuidv4();
    asyncLocalStorage.run({ correlationId }, () => {
        next();
    });
}