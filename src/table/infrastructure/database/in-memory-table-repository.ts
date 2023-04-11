import { Table } from '../../domain/table';
import { TableRepository } from '../../domain/table-repository';
import { TABLES } from './table_collection';

export class InMemoryTableRepository implements TableRepository {
  async save(table: Table): Promise<Table> {
    TABLES.push(table);
    return table;
  }
}
