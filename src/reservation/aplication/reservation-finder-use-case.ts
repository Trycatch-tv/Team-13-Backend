import { Table } from "../../table/domain/table";

import { Reservation } from "../domain/reservation";
import { ReservationRepository } from "../domain/reservation-repository";

export class ReservationFinder {
    constructor(private readonly _reservationRepository: ReservationRepository) {}

    async run(client?: string, number_people?: number, table?: Table): Promise<Reservation[]> {
        const reservations = await this._reservationRepository.reservationFinder(client, number_people, table);
        return reservations;
    }
}