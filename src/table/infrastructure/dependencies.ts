import { TableCreator } from '../application/table-create-use-case';
import { TablePostController } from './http/controller/table-post-controller';
import { InMemoryTableRepository } from './database/in-memory-table-repository';

const dbTableRepository = new InMemoryTableRepository();

const tableCreator = new TableCreator(dbTableRepository);
export const tablePostController = new TablePostController(tableCreator);
