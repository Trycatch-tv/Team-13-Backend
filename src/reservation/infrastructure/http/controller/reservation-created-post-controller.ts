import { Request, Response } from 'express';
import status from 'http-status';

import { ApiResponse } from '../../../../shared/api-response';
import { ReservationCreator } from '../../../aplication/reservation-create-use-case';
import { TableNotFound } from '../../../../table/domain/table-not-found';

export class ReservationPostController {
  constructor(private readonly _reservationCreator: ReservationCreator) {}

  async run(req: Request, res: Response) {
    try {
      const reservation = await this._reservationCreator.run(req.body);
      return res
        .status(status.CREATED)
        .json(new ApiResponse('Success', 'Reservation created', reservation));
    } catch (error) {
      if (error instanceof TableNotFound) {
        return res
          .status(status.NOT_FOUND)
          .json(new ApiResponse('Error', error.message));
      }
      return res
        .status(status.INTERNAL_SERVER_ERROR)
        .json(new ApiResponse('Error', 'Internal server error', error));
    }
  }
}
