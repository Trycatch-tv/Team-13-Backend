import express from 'express';

import {
  reservationFindByIdController,
  reservationUpdateGetController,
  reservationFinderGetController,
} from '../dependencies';

const reservationRouter = express.Router();

reservationRouter.get(
  '/',
  reservationFinderGetController.run.bind(reservationFinderGetController)
);

reservationRouter.get(
  '/:idReservation',
  reservationFindByIdController.run.bind(reservationFindByIdController)
);

reservationRouter.put(
  '/:id',
  reservationUpdateGetController.run.bind(reservationUpdateGetController)
);

export { reservationRouter };
