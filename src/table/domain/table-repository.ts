import { Table, TableDto } from './table';

export interface TableRepository {
  save(table: Table): Promise<Table>;
  tableFinder(
    location?: number,
    capacity?: number,
    number?: number
  ): Promise<Table[]>;
  findById(id: string | number): Promise<Table | null>;
  updateTable(updateTableDto: TableDto, id: string | number): Promise<Table>;
}
