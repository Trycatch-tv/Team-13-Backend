import { Reservation } from '../domain/reservation';
import { ReservationRepository } from '../domain/reservation-repository';

export class ReservationFinder {
  constructor(private readonly _reservationRepository: ReservationRepository) {}

  async run(
    state?: number,
    table?: string,
    fecha?: string
  ): Promise<Reservation[]> {
    const reservations = await this._reservationRepository.reservationFinder(
      state,
      table,
      fecha
    );
    return reservations;
  }
}
