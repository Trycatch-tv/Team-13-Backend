import { Reservation, ReservationDto } from './reservation';

export interface ReservationRepository {
  save(reservation: Reservation): Promise<Reservation>;

  reservationFinder(): Promise<Reservation[]>;

  findReservationById(id: string | number): Promise<Reservation | null>;

  updateReservation(
    updateReservationDto: ReservationDto,
    id: string | number
  ): Promise<Reservation>;
}
