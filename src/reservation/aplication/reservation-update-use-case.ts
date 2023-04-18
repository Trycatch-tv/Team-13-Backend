import { Reservation, ReservationDto } from '../domain/reservation';
import { ReservationRepository } from '../domain/reservation-repository';
import { ReservationNotFound } from '../domain/reservation-not-found';
import { TableNotFound } from '../../table/domain/table-not-found';

export class ReservationUpdate {
  constructor(private readonly _reservationRepository: ReservationRepository) {}

  async run(
    updateReservationDto: ReservationDto,
    id: string | number
  ): Promise<Reservation | ReservationNotFound> {
    const reservation = await this._reservationRepository.findReservationById(
      id
    );
    if (reservation === null) {
      throw new TableNotFound(id);
    }
    const reservationUpdated =
      await this._reservationRepository.updateReservation(
        updateReservationDto,
        id
      );
    return reservationUpdated;
  }
}
