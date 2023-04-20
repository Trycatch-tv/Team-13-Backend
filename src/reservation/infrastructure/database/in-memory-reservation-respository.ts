import { Reservation, ReservationDto } from '../../domain/reservation';
import { ReservationRepository } from '../../domain/reservation-repository';
import { RESERVATIONS } from './reservation_collection';

export class InMemoryReservationRepository implements ReservationRepository {
  async save(reservation: Reservation): Promise<Reservation> {
    RESERVATIONS.push(reservation);
    return reservation;
  }

  async reservationFinder(): Promise<Reservation[]> {
    return RESERVATIONS;
  }

  async findReservationById(id: string | number): Promise<Reservation | null> {
    const reservation = RESERVATIONS.find(
      (reservation) => reservation.id === id
    );
    return reservation ?? null;
  }

  async updateReservation(
    updateReservationDto: ReservationDto,
    id: string | number
  ): Promise<Reservation> {
    console.log(updateReservationDto, id);
    // const reservationIndex = RESERVATIONS.findIndex(
    //   (reservation) => reservation.id === id
    // );
    // const { customer_id, number_people, table_id } = updateReservationDto;
    // const updatedAt = new Date();

    // if (reservationIndex !== -1) {
    //   const reservationUpdated = {
    //     ...RESERVATIONS[reservationIndex],
    //     client,
    //     number_people,
    //     table,
    //     updatedAt,
    //   };
    //   RESERVATIONS[reservationIndex] = reservationUpdated;
    // }
    return RESERVATIONS[0];
  }
}
