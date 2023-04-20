import { Customer } from '../../customer/dominio/customer';
import { CustomerRepository } from '../../customer/dominio/customer-repository';
import { TableRepository } from '../../table/domain/table-repository';
import { ReservationRepository } from '../domain/reservation-repository';
import {
  Reservation,
  ReservationDto,
  ReservationResponDto,
} from '../domain/reservation';

export class ReservationCreator {
  constructor(
    private readonly _reservationRepository: ReservationRepository,
    private readonly _customerRepository: CustomerRepository,
    private readonly _tableRepository: TableRepository
  ) {}

  async run(
    reservationDto: ReservationDto
  ): Promise<ReservationResponDto | null> {
    const table = await this._tableRepository.findById(reservationDto.table_id);
    let customer = await this._customerRepository.findByNumberPhone(
      reservationDto.number_phone_customer
    );

    if (customer === null) {
      const newCustomer = new Customer(
        reservationDto.name_customer,
        reservationDto.number_phone_customer
      );

      customer = await this._customerRepository.save(newCustomer);
    }

    const newReservation = new Reservation(
      customer.id,
      reservationDto.number_people,
      reservationDto.table_id
    );

    const reservation = await this._reservationRepository.save(newReservation);

    if (table !== null) {
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

    return null;
  }
}
