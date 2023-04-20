import { v4 as uuidv4 } from 'uuid';
import { statusEnum } from './reservation-status';
import { Customer } from '../../customer/dominio/customer';
import { Table } from '../../table/domain/table';

export class Reservation {
  public readonly id: string | number;
  public readonly status: statusEnum;
  public readonly customer_id: string | number;
  public readonly table_id: string | number;
  public readonly number_people: number;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(
    customer_id: string | number,
    number_people: number,
    table_id: string | number
  ) {
    this.id = uuidv4();
    this.status = statusEnum.CONFIRMED;
    this.customer_id = customer_id;
    this.number_people = number_people;
    this.table_id = table_id;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export type ReservationDto = Omit<
  Reservation,
  'id' | 'customer_id' | 'status' | 'createdAt' | 'updatedAt'
> & {
  name_customer: string;
  number_phone_customer: number;
};

export type ReservationResponDto = Omit<
  Reservation,
  'table_id' | 'customer_id'
> & {
  customer: Customer;
  table?: Table;
};
