import { Reservation, ReservationDto } from './reservation';

export interface ReservationRepository {
  findReservationById(
    idReservation: string | number
  ): Promise<Reservation | null>;

  updateReservation(
    updateReservationDto: ReservationDto,
    id: string | number
  ): Promise<Reservation>;
}
