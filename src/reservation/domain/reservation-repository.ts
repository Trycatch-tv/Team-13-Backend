import { Table } from '../../table/domain/table';
import { Reservation, ReservationDto } from './reservation';

export interface ReservationRepository {

  reservationFinder(client?: string, number_people?:number, table?: Table): Promise<Reservation[]>;

  findReservationById(
    idReservation: string | number
  ): Promise<Reservation | null>;

  updateReservation(
    updateReservationDto: ReservationDto,
    id: string | number
  ): Promise<Reservation>;
}
