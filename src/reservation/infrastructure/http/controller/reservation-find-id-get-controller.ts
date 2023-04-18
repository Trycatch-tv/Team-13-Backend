import { Request, Response } from 'express';
import status from 'http-status';

import { ReservationFindById } from '../../../aplication/reservation-find-Id-use-case';
import { ApiResponse } from '../../../../shared/api-response';
import { ReservationNotFound } from '../../../domain/reservation-not-found';

export class ReservationFindByIdGetController {
  constructor(private readonly _reservationFindById: ReservationFindById) {}

  async run(req: Request, res: Response) {
    try {
      const { idReservation } = req.params;

      const reservation = await this._reservationFindById.run(idReservation);
      return res
        .status(status.OK)
        .json(new ApiResponse('Sucess', 'Reservation gotten', reservation));
    } catch (error) {
      if (error instanceof ReservationNotFound) {
        return res
          .status(status.NOT_FOUND)
          .json(new ApiResponse('Error', error.message));
      }
      return res
        .status(status.INTERNAL_SERVER_ERROR)
        .json(new ApiResponse('Error', 'Internal server error'));
    }
  }
}
