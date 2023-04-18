export class ReservationNotFound extends Error {
  constructor(idReservation: string | number) {
    super(`Reservation not found "${idReservation}"`);
  }
}
