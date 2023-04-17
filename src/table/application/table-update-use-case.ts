import { Table, TableDto } from '../domain/table';
import { TableRepository } from '../domain/table-repository';
import { TableNotFound } from '../domain/table-not-found';

export class UpdateTable {
  constructor(private readonly _tableRepository: TableRepository) {}

  async run(
    updateTableDto: TableDto,
    id: string | number
  ): Promise<Table | TableNotFound> {
    const table = await this._tableRepository.findById(id);
    if (table === null) {
      throw new TableNotFound(id);
    }
    const tableUpdated = await this._tableRepository.updateTable(
      updateTableDto,
      id
    );
    return tableUpdated;
  }
}
