import { Request, Response } from 'express';
import status from 'http-status';

import { TableFinder } from '../../../application/table-finder-use-case';
import { ApiResponse } from '../../../../shared/api-response';

export class TableFinderGetController {
  constructor(private readonly _tableFinder: TableFinder) {}

  async run(req: Request, res: Response) {
    try {
      const locationParam = req.query?.location;
      const location =
        typeof locationParam === 'string' ? parseInt(locationParam) : undefined;
      const capacityParam = req.query?.capacity;
      const capacity =
        typeof capacityParam === 'string' ? parseInt(capacityParam) : undefined;

      const tables = await this._tableFinder.run(location, capacity);
      return res
        .status(status.OK)
        .json(new ApiResponse('Success', 'Tables gotten', tables));
    } catch (error) {
      return res
        .status(status.INTERNAL_SERVER_ERROR)
        .json(new ApiResponse('Error', 'Internal server error', error));
    }
  }
}
