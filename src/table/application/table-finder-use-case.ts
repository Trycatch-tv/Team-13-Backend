import { Table } from '../domain/table';
import { TableRepository } from '../domain/table-repository';

export class TableFinder {
  constructor(private readonly _tableRepository: TableRepository) {}

  async run(location?: number, capacity?: number): Promise<Table[]> {
    console.log('app' + location, capacity);
    const tablas = await this._tableRepository.tableFinder(location, capacity);
    return tablas;
  }
}
