import { Reservation } from '../domain/reservation';
import { ReservationRepository } from '../domain/reservation-repository';

export class ReservationFinder {
  constructor(private readonly _reservationRepository: ReservationRepository) {}

  async run(): Promise<Reservation[]> {
    const reservations = await this._reservationRepository.reservationFinder();
    return reservations;
  }
}
