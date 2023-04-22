import { Request, Response } from 'express';
import status from 'http-status';

import { ReservationFinder } from '../../../aplication/reservation-finder-use-case';
import { ApiResponse } from '../../../../shared/api-response';

export class ReservationFinderGetController {
  constructor(private readonly _reservationFinder: ReservationFinder) {}

  async run(req: Request, res: Response) {
    try {
      const stateParam = req.query?.state;
      const state =
        typeof stateParam === 'string' ? parseInt(stateParam) : undefined;
      const tableParam = req.query?.table;
      const table = typeof tableParam === 'string' ? tableParam : undefined;
      const fechaParam = req.query?.fecha;
      const fecha = typeof fechaParam === 'string' ? fechaParam : undefined;

      const reservations = await this._reservationFinder.run(
        state,
        table,
        fecha
      );
      return res
        .status(status.OK)
        .json(new ApiResponse('Success', 'Reservations gotten', reservations));
    } catch (error) {
      return res
        .status(status.INTERNAL_SERVER_ERROR)
        .json(new ApiResponse('Error', 'Internal server error', error));
    }
  }
}
