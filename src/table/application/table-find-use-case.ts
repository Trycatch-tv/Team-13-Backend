import { Table } from '../domain/table';
import { TableRepository } from '../domain/table-repository';
import { TableNotFound } from '../domain/table-not-found';

export class TableFindById {
  constructor(private readonly _tableRepository: TableRepository) {}

  async run(id: string | number): Promise<Table | TableNotFound> {
    const tabla = await this._tableRepository.findById(id);
    if (tabla === null) {
      throw new TableNotFound(id);
    }
    return tabla;
  }
}
