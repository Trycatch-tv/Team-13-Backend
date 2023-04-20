import express from 'express';

import {
  reservationFindByIdController,
  reservationUpdatePutController,
  reservationFinderGetController,
  reservationPostController,
} from '../dependencies';

const reservationRouter = express.Router();

reservationRouter.post(
  '/',
  reservationPostController.run.bind(reservationPostController)
);

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
  reservationUpdatePutController.run.bind(reservationUpdatePutController)
);

export { reservationRouter };
