import { Request, Response } from 'express';
import status from 'http-status';

import { TableUpdate } from '../../../application/table-update-use-case';
import { ApiResponse } from '../../../../shared/api-response';
import { TableNotFound } from '../../../domain/table-not-found';

export class TableUpdateGetController {
  constructor(private readonly _tableUpdate: TableUpdate) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const table = await this._tableUpdate.run(req.body, id);

      return res
        .status(status.OK)
        .json(new ApiResponse('Success', 'Table Updated', table));
    } catch (error) {
      if (error instanceof TableNotFound) {
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
