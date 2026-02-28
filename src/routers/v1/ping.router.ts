import express from 'express'

import pingController from '../../controllers/ping.controller.ts';

const pingRouter = express.Router();

pingRouter.get('/ping', pingController);

export default pingRouter;