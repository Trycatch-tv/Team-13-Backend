import { Reservation, ReservationUpdateDto } from '../../domain/reservation';
import { ReservationRepository } from '../../domain/reservation-repository';
import { RESERVATIONS } from './reservation_collection';

export class InMemoryReservationRepository implements ReservationRepository {
  async save(reservation: Reservation): Promise<Reservation> {
    RESERVATIONS.push(reservation);
    return reservation;
  }

  async reservationFinder(
    state?: number,
    table?: string,
    fecha?: string
  ): Promise<Reservation[]> {
    const reservations = RESERVATIONS.filter((reservation) => {
      if (state === undefined && table === undefined && fecha === undefined)
        return true;
      if (state !== undefined && table === undefined && fecha === undefined)
        return reservation.status === state;
      if (table !== undefined && state == undefined && fecha === undefined)
        return reservation.table_id === table;
      if (fecha !== undefined && table !== undefined && state == undefined) {
        return new Date(reservation.updatedAt) > new Date(fecha);
      }

      return (
        state !== undefined &&
        table !== undefined &&
        fecha !== undefined &&
        reservation.status === state &&
        reservation.table_id === table &&
        new Date(reservation.updatedAt) > new Date(fecha)
      );
    });
    return reservations;
  }

  async findReservationById(id: string | number): Promise<Reservation | null> {
    const reservation = RESERVATIONS.find(
      (reservation) => reservation.id === id
    );
    return reservation ?? null;
  }

  async updateReservation(
    reservationUpdateDto: ReservationUpdateDto,
    id: string | number
  ): Promise<Reservation> {
    const reservationIndex = RESERVATIONS.findIndex(
      (reservation) => reservation.id === id
    );
    const { status, updatedAt, number_people, table_id } = reservationUpdateDto;

    if (reservationIndex !== -1) {
      const reservationUpdated = {
        ...RESERVATIONS[reservationIndex],
        number_people,
        status,
        table_id,
        updatedAt,
      };
      RESERVATIONS[reservationIndex] = reservationUpdated;
    }
    return RESERVATIONS[reservationIndex];
  }
}
