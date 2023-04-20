import { Reservation } from '../domain/reservation';
import { ReservationRepository } from '../domain/reservation-repository';
import { ReservationNotFound } from '../domain/reservation-not-found';

export class ReservationFindById {
  constructor(private readonly _reservationRepository: ReservationRepository) {}

  async run(id: string | number): Promise<Reservation | ReservationNotFound> {
    const reservation = await this._reservationRepository.findReservationById(
      id
    );
    if (reservation === null) {
      throw new ReservationNotFound(id);
    }
    return reservation;
  }
}
