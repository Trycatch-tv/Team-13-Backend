import { Reservation, ReservationUpdateDto } from './reservation';

export interface ReservationRepository {
  save(reservation: Reservation): Promise<Reservation>;

  reservationFinder(
    state?: number,
    table?: string,
    fecha?: string
  ): Promise<Reservation[]>;

  findReservationById(id: string | number): Promise<Reservation | null>;

  updateReservation(
    reservationUpdateDto: ReservationUpdateDto,
    id: string | number
  ): Promise<Reservation>;
}
