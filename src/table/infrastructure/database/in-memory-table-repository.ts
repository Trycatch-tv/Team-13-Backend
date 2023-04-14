import { Table } from '../../domain/table';
import { TableRepository } from '../../domain/table-repository';
import { TABLES } from './table_collection';

export class InMemoryTableRepository implements TableRepository {
  async save(table: Table): Promise<Table> {
    TABLES.push(table);
    return table;
  }

  async tableFinder(location?: number, capacity?: number): Promise<Table[]> {
    const tables = TABLES.filter((table) => {
      if (location === undefined && capacity === undefined) {
        return true;
      }

      if (location === undefined && capacity !== undefined) {
        return table.capacity > capacity;
      }

      if (capacity === undefined && location !== undefined) {
        return table.location > location;
      }

      return (
        capacity !== undefined &&
        location !== undefined &&
        table.location > location &&
        table.capacity > capacity
      );
    });
    return tables;
  }

  async findById(id: string | number): Promise<Table | null> {
    const table = TABLES.find((table) => id === table.id);
    return table ?? null;
  }
}
