import { Request, Response } from 'express';
import status from 'http-status';

import { ReservationUpdate } from '../../../aplication/reservation-update-use-case';
import { ApiResponse } from '../../../../shared/api-response';
import { ReservationNotFound } from '../../../domain/reservation-not-found';

export class ReservationUpdatePutController {
  constructor(private readonly _reservationUpdate: ReservationUpdate) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const reservation = await this._reservationUpdate.run(req.body, id);
      return res
        .status(status.OK)
        .json(new ApiResponse('Sucess', 'Reservation Updated', reservation));
    } catch (error) {
      if (error instanceof ReservationNotFound) {
        return res
          .status(status.NOT_FOUND)
          .json(new ApiResponse('Error', error.message));
      }
      return res
        .status(status.INTERNAL_SERVER_ERROR)
        .json(new ApiResponse('Eror', 'Internal server error'));
    }
  }
}
