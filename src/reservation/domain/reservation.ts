import { v4 as uuidv4 } from 'uuid';
import { Table } from '../../table/domain/table';

export class Reservation {
  public readonly idReservation: string;
  public readonly client: string;
  public readonly number_people: number;
  public readonly table: Table;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(client: string, number_people: number, table: Table) {
    this.idReservation = uuidv4();
    this.client = client;
    this.number_people = number_people;
    this.table = table;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export type ReservationDto = Omit<
  Reservation,
  'idReservation' | 'createdAt' | 'updatedAt'
>;
