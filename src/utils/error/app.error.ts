export interface AppError extends Error {
    statusCode: number;
}

export class InternalServerError implements AppError {
    name: string;
    statusCode: number;
    message: string;

    constructor(message: string) {
        this.statusCode = 500;
        this.message = message;
        this.name = "InternalServerError";
    }
}

export class NotFoundError implements AppError {
    name: string;
    statusCode: number;
    message: string;

    constructor(message: string) {
        this.statusCode = 404;
        this.message = message;
        this.name = "NotFoundError";
    }
}

export class BadRequestError implements AppError {
    name: string;
    statusCode: number;
    message: string;

    constructor(message: string) {
        this.statusCode = 400;
        this.message = message;
        this.name = "BadRequestError";
    }
}