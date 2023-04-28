import { Table } from '../domain/table';
import { TableRepository } from '../domain/table-repository';

export class TableFinder {
  constructor(private readonly _tableRepository: TableRepository) {}

  async run(
    location?: number,
    capacity?: number,
    number?: number
  ): Promise<Table[]> {
    const tablas = await this._tableRepository.tableFinder(
      location,
      capacity,
      number
    );
    return tablas;
  }
}
