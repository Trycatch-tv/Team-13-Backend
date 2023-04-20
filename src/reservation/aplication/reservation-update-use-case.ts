import { Reservation, ReservationUpdateDto } from '../domain/reservation';
import { ReservationRepository } from '../domain/reservation-repository';
import { ReservationNotFound } from '../domain/reservation-not-found';
import { TableNotFound } from '../../table/domain/table-not-found';
import { TableRepository } from '../../table/domain/table-repository';

export class ReservationUpdate {
  constructor(
    private readonly _reservationRepository: ReservationRepository,
    private readonly _tableRepository: TableRepository
  ) {}

  async run(
    reservationUpdateDto: ReservationUpdateDto,
    id: string | number
  ): Promise<Reservation | ReservationNotFound> {
    const reservation = await this._reservationRepository.findReservationById(
      id
    );
    if (reservation === null) {
      throw new TableNotFound(id);
    }
    if (reservation.table_id !== reservationUpdateDto.table_id) {
      const table = await this._tableRepository.findById(
        reservationUpdateDto.table_id
      );

      if (table === null) {
        throw new TableNotFound(reservationUpdateDto.table_id);
      }
    }
    const reservationUpdated =
      await this._reservationRepository.updateReservation(
        reservationUpdateDto,
        id
      );
    return reservationUpdated;
  }
}
