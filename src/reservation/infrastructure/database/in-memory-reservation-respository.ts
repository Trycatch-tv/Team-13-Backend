import { Reservation } from '../../domain/reservation';
import { ReservationRepository } from '../../domain/reservation-repository';
import { RESERVATIONS } from './reservation_collection';

export class InMemoryReservationRepository implements ReservationRepository {
  async findReservationById(
    idReservation: string | number
  ): Promise<Reservation | null> {
    const reservation = RESERVATIONS.find(
      (reservation) => reservation.idReservation === idReservation
    );
    return reservation ?? null;
  }
}
