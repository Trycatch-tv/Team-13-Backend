import { Table, TableDto } from '../../domain/table';
import { TableRepository } from '../../domain/table-repository';
import { TABLES } from './table_collection';

export class InMemoryTableRepository implements TableRepository {
  async save(table: Table): Promise<Table> {
    TABLES.push(table);
    return table;
  }

  async tableFinder(
    location?: number,
    capacity?: number,
    number?: number
  ): Promise<Table[]> {
    const tables = TABLES.filter((table) => {
      if (
        location === undefined &&
        capacity === undefined &&
        number === undefined
      ) {
        return true;
      }

      if (
        capacity !== undefined &&
        location === undefined &&
        number === undefined
      ) {
        return table.capacity === capacity;
      }

      if (
        location !== undefined &&
        capacity === undefined &&
        number === undefined
      ) {
        return table.location === location;
      }
      if (
        number !== undefined &&
        location === undefined &&
        capacity === undefined
      ) {
        return table.number_table === number;
      }

      return (
        capacity !== undefined &&
        location !== undefined &&
        number !== undefined &&
        table.location === location &&
        table.capacity === capacity &&
        table.number_table === number
      );
    });
    return tables;
  }

  async findById(id: string | number): Promise<Table | null> {
    const table = TABLES.find((table) => id === table.id);
    return table ?? null;
  }

  async updateTable(
    updateTableDto: TableDto,
    id: string | number
  ): Promise<Table> {
    const tableIndex = TABLES.findIndex((table) => table.id === id);
    const { capacity, location, number_table } = updateTableDto;
    const updatedAt = new Date();

    if (tableIndex !== -1) {
      const tableUpdated = {
        ...TABLES[tableIndex],
        capacity,
        location,
        number_table,
        updatedAt,
      };

      TABLES[tableIndex] = tableUpdated;
    }
    return TABLES[tableIndex];
  }
}
