import { Table, CreateTableDto } from '../domain/table';
import { TableRepository } from '../domain/table-repository';

export class TableCreator {
  constructor(private readonly _tableRepository: TableRepository) {}

  async run(createTableDto: CreateTableDto): Promise<Table> {
    const table = new Table(
      createTableDto.number_table,
      createTableDto.capacity,
      createTableDto.location
    );

    return await this._tableRepository.save(table);
  }
}
