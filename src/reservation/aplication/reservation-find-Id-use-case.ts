import { ReservationResponDto } from '../domain/reservation';
import { ReservationRepository } from '../domain/reservation-repository';
import { ReservationNotFound } from '../domain/reservation-not-found';
import { CustomerRepository } from '../../customer/dominio/customer-repository';
import { TableRepository } from '../../table/domain/table-repository';
import { CustomerNotFound } from '../../customer/dominio/customer-not-found';
import { TableNotFound } from '../../table/domain/table-not-found';

export class ReservationFindById {
  constructor(
    private readonly _reservationRepository: ReservationRepository,
    private readonly _customerRepository: CustomerRepository,
    private readonly _tableRepository: TableRepository
  ) {}

  async run(
    id: string | number
  ): Promise<ReservationResponDto | ReservationNotFound> {
    const reservation = await this._reservationRepository.findReservationById(
      id
    );
    if (reservation === null) {
      throw new ReservationNotFound(id);
    }
    const customer = await this._customerRepository.findById(
      reservation.customer_id
    );

    if (customer === null) {
      throw new CustomerNotFound(reservation.customer_id);
    }

    const table = await this._tableRepository.findById(reservation.table_id);

    if (table === null) {
      throw new TableNotFound(reservation.table_id);
    }

    const reservationRespon: ReservationResponDto = {
      id: reservation.id,
      status: reservation.status,
      number_people: reservation.number_people,
      customer,
      table,
      createdAt: reservation.createdAt,
      updatedAt: reservation.updatedAt,
    };
    return reservationRespon;
  }
}
