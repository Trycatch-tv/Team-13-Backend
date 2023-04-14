import { Table } from './table';

export interface TableRepository {
  save(table: Table): Promise<Table>;
  tableFinder(location?: number, capacity?: number): Promise<Table[]>;
}
