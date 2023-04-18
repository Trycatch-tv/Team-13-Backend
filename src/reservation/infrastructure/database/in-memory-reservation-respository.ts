import { Table } from '../../../table/domain/table';
import { Reservation, ReservationDto } from '../../domain/reservation';
import { ReservationRepository } from '../../domain/reservation-repository';
import { RESERVATIONS } from './reservation_collection';

export class InMemoryReservationRepository implements ReservationRepository {

  async reservationFinder(client?: string | undefined, number_people?: number | undefined, table?: Table | undefined): Promise<Reservation[]> {
    const reservations = RESERVATIONS.filter((reservation)=>{
      if (client === undefined && number_people === undefined && table === undefined){
        return true;
      }

      if (client === undefined && number_people == undefined && table!==undefined){
        reservation.table > table; 
      }

      if (client === undefined && table === undefined && number_people !== undefined){
        reservation.number_people > number_people;
      }

      if ( number_people === undefined && table === undefined && client !== undefined){
        reservation.client > client;
      }

      return (
        client !== undefined &&
        number_people !== undefined && 
        table !== undefined &&
        reservation.client > client &&
        reservation.number_people > number_people && 
        reservation.table > table
      );
    })
    return reservations;
  }

  async findReservationById(
    idReservation: string | number
  ): Promise<Reservation | null> {
    const reservation = RESERVATIONS.find(
      (reservation) => reservation.idReservation === idReservation
    );
    return reservation ?? null;
  }

  async updateReservation(
    updateReservationDto: ReservationDto,
    idReservation: string | number
  ): Promise<Reservation> {
    const reservationIndex = RESERVATIONS.findIndex(
      (reservation) => reservation.idReservation === idReservation
    );
    const { client, number_people, table } = updateReservationDto;
    const updatedAt = new Date();

    if (reservationIndex !== -1) {
      const reservationUpdated = {
        ...RESERVATIONS[reservationIndex],
        client,
        number_people,
        table,
        updatedAt,
      };
      RESERVATIONS[reservationIndex] = reservationUpdated;
    }
    return RESERVATIONS[reservationIndex];
  }
}
