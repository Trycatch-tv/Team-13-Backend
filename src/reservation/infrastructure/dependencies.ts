import { InMemoryReservationRepository } from './database/in-memory-reservation-respository';

import { ReservationFindById } from '../aplication/reservation-find-Id-use-case';
import { ReservationFindByIdGetController } from './http/controller/reservation-find-id-get-controller';

const dbReservationRepository = new InMemoryReservationRepository();

const reservationFindById = new ReservationFindById(dbReservationRepository);
export const reservationFindByIdController =
  new ReservationFindByIdGetController(reservationFindById);
