import { createLogger, format, transports } from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

import { getCorrelationId } from "../utils/helpers/request.helpers.ts";

const logger = createLogger({
    format: format.combine(
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        format.json(),
        format.printf(({ timestamp, level, message, ...data }) => {
            const log = {
                timestamp,
                level,
                message,
                correlationId: getCorrelationId(),
                data,
            }
            return JSON.stringify(log);
        })
    ),
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            filename: "logs/%DATE%-app.log",
            datePattern: "YYYY-MM-DD",
            maxFiles: "14d",
            maxSize: "20m",
        }),
    ],
})

export default logger;

