import express from 'express';

import { tablePostController } from '../dependencies';

const tableRouter = express.Router();

tableRouter.post('/', tablePostController.run.bind(tablePostController));

export { tableRouter };
