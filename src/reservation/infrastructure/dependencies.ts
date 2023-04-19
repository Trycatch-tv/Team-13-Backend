import { InMemoryReservationRepository } from './database/in-memory-reservation-respository';

import { ReservationFinder } from '../aplication/reservation-finder-use-case';
import { ReservationFinderGetController } from './http/controller/reservation-finder-get-controller';
import { ReservationFindById } from '../aplication/reservation-find-Id-use-case';
import { ReservationFindByIdGetController } from './http/controller/reservation-find-id-get-controller';
import { ReservationUpdate } from '../aplication/reservation-update-use-case';
import { ReservationUpdateGetController } from './http/controller/reservation-update-get-controller';

const dbReservationRepository = new InMemoryReservationRepository();

const reservationFinder = new ReservationFinder(dbReservationRepository);
export const reservationFinderGetController =
  new ReservationFinderGetController(reservationFinder);

const reservationFindById = new ReservationFindById(dbReservationRepository);
export const reservationFindByIdController =
  new ReservationFindByIdGetController(reservationFindById);

const reservationUpdated = new ReservationUpdate(dbReservationRepository);
export const reservationUpdateGetController =
  new ReservationUpdateGetController(reservationUpdated);
