import express from 'express';

import {
  tablePostController,
  tableFinderGetController,
  tableFindByIdController,
} from '../dependencies';

const tableRouter = express.Router();

tableRouter.post('/', tablePostController.run.bind(tablePostController));
tableRouter.get(
  '/',
  tableFinderGetController.run.bind(tableFinderGetController)
);
tableRouter.get(
  '/:id',
  tableFindByIdController.run.bind(tableFindByIdController)
);

export { tableRouter };
