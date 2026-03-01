import express from 'express';

import { serverConfig } from './config/index.ts';
import v1Router from './routers/v1/index.router.ts';
import { genericErrorHandler } from './middlewares/error.middleware.ts';
import logger from './config/logger.config.ts';
import { attachCorrelationId } from './middlewares/correlation.middleware.ts';

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(attachCorrelationId); // Middleware to attach correlation ID to responses

app.use('/api/v1', v1Router);

app.use(genericErrorHandler); // Global error handling middleware

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
});