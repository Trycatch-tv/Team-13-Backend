import express from 'express';

import { reservationFindByIdController } from '../dependencies';

const reservationRouter = express.Router();

reservationRouter.get(
  '/:idReservation',
  reservationFindByIdController.run.bind(reservationFindByIdController)
);

export { reservationRouter };
