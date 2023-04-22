import express from 'express';

import {
  tablePostController,
  tableFinderGetController,
  tableFindByIdController,
  tableUpdateGetController,
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

tableRouter.put(
  '/:id',
  tableUpdateGetController.run.bind(tableUpdateGetController)
);

export { tableRouter };
