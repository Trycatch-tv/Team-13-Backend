import express from 'express';

import { tablePostController, tableFinderGetController } from '../dependencies';

const tableRouter = express.Router();

tableRouter.post('/', tablePostController.run.bind(tablePostController));
tableRouter.get(
  '/',
  tableFinderGetController.run.bind(tableFinderGetController)
);

export { tableRouter };
