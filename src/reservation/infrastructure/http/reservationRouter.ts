import express from 'express';

import {
  reservationFindByIdController,
  reservationUpdateGetController,
} from '../dependencies';

const reservationRouter = express.Router();

reservationRouter.get(
  '/:idReservation',
  reservationFindByIdController.run.bind(reservationFindByIdController)
);

reservationRouter.put(
  '/:id',
  reservationUpdateGetController.run.bind(reservationUpdateGetController)
);

export { reservationRouter };
