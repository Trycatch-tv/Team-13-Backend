import { Request, Response } from 'express';
import status from 'http-status';

import { CreateTableDto } from '../../../domain/table';
import { TableCreator } from '../../../application/table-create-use-case';
import { ApiResponse } from '../../../../shared/api-response';

export class TablePostController {
  constructor(private readonly _tableCreator: TableCreator) {}

  async run(req: Request<CreateTableDto>, res: Response) {
    try {
      const table = await this._tableCreator.run(req.body);
      return res
        .status(status.CREATED)
        .json(new ApiResponse('Success', 'Table created', table));
    } catch (error) {
      return res
        .status(status.INTERNAL_SERVER_ERROR)
        .json(new ApiResponse('Error', 'Internal server error', error));
    }
  }
}
