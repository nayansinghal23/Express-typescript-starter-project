import express from 'express';

import pingRouter from './ping.router.ts';

const v1Router = express.Router();

v1Router.get('/ping', pingRouter)

export default v1Router