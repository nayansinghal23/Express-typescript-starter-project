import express from 'express'

import pingController from '../../controllers/ping.controller.ts';

const pingRouter = express.Router();

pingRouter.get('/', pingController);

export default pingRouter;