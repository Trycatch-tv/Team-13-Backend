import { InMemoryReservationRepository } from './database/in-memory-reservation-respository';

import { ReservationFindById } from '../aplication/reservation-find-Id-use-case';
import { ReservationFindByIdGetController } from './http/controller/reservation-find-id-get-controller';
import { ReservationUpdate } from '../aplication/reservation-update-use-case';
import { ReservationUpdateGetController } from './http/controller/reservation-update-get-controller';

const dbReservationRepository = new InMemoryReservationRepository();

const reservationFindById = new ReservationFindById(dbReservationRepository);
export const reservationFindByIdController =
  new ReservationFindByIdGetController(reservationFindById);

const reservationUpdated = new ReservationUpdate(dbReservationRepository);
export const reservationUpdateGetController =
  new ReservationUpdateGetController(reservationUpdated);
