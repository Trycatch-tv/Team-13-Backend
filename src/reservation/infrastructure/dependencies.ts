import { InMemoryReservationRepository } from './database/in-memory-reservation-respository';
import { dbCustomerRepository } from '../../customer/infrastructure/dependencies';
import { dbTableRepository } from '../../table/infrastructure/dependencies';

import { ReservationFinder } from '../aplication/reservation-finder-use-case';
import { ReservationFinderGetController } from './http/controller/reservation-finder-get-controller';
import { ReservationFindById } from '../aplication/reservation-find-Id-use-case';
import { ReservationFindByIdGetController } from './http/controller/reservation-find-id-get-controller';
import { ReservationUpdate } from '../aplication/reservation-update-use-case';
import { ReservationUpdatePutController } from './http/controller/reservation-update-put-controller';
import { ReservationCreator } from '../aplication/reservation-create-use-case';
import { ReservationPostController } from './http/controller/reservation-created-post-controller';

const dbReservationRepository = new InMemoryReservationRepository();

const reservationFinder = new ReservationFinder(dbReservationRepository);
export const reservationFinderGetController =
  new ReservationFinderGetController(reservationFinder);

const reservationFindById = new ReservationFindById(
  dbReservationRepository,
  dbCustomerRepository,
  dbTableRepository
);
export const reservationFindByIdController =
  new ReservationFindByIdGetController(reservationFindById);

const reservationUpdated = new ReservationUpdate(
  dbReservationRepository,
  dbTableRepository
);
export const reservationUpdatePutController =
  new ReservationUpdatePutController(reservationUpdated);

const reservationCreator = new ReservationCreator(
  dbReservationRepository,
  dbCustomerRepository,
  dbTableRepository
);
export const reservationPostController = new ReservationPostController(
  reservationCreator
);
