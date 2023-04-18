import { Reservation, ReservationDto } from '../../domain/reservation';
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

  async updateReservation(
    updateReservationDto: ReservationDto,
    idReservation: string | number
  ): Promise<Reservation> {
    const reservationIndex = RESERVATIONS.findIndex(
      (reservation) => reservation.idReservation === idReservation
    );
    const { client, number_people, table } = updateReservationDto;
    const updatedAt = new Date();

    if (reservationIndex !== -1) {
      const reservationUpdated = {
        ...RESERVATIONS[reservationIndex],
        client,
        number_people,
        table,
        updatedAt,
      };
      RESERVATIONS[reservationIndex] = reservationUpdated;
    }
    return RESERVATIONS[reservationIndex];
  }
}
