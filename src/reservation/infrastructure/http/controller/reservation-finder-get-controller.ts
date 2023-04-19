import { Request, Response } from 'express';
import status from 'http-status';

import { ReservationFinder } from '../../../aplication/reservation-finder-use-case';
import { ApiResponse } from '../../../../shared/api-response';

export class ReservationFinderGetController {
  constructor(private readonly _reservationFinder: ReservationFinder) {}

  async run(_req: Request, res: Response) {
    try {
      const reservations = await this._reservationFinder.run();
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
