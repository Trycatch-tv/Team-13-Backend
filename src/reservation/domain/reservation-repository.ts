import { Reservation, ReservationDto } from './reservation';

export interface ReservationRepository {
  reservationFinder(): Promise<Reservation[]>;

  findReservationById(
    idReservation: string | number
  ): Promise<Reservation | null>;

  updateReservation(
    updateReservationDto: ReservationDto,
    id: string | number
  ): Promise<Reservation>;
}
