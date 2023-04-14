import { InMemoryTableRepository } from './database/in-memory-table-repository';

import { TableCreator } from '../application/table-create-use-case';
import { TablePostController } from './http/controller/table-post-controller';
import { TableFinder } from '../application/table-finder-use-case';
import { TableFinderGetController } from './http/controller/table-finder-get-controller';

const dbTableRepository = new InMemoryTableRepository();

const tableCreator = new TableCreator(dbTableRepository);
export const tablePostController = new TablePostController(tableCreator);

const tablefinder = new TableFinder(dbTableRepository);
export const tableFinderGetController = new TableFinderGetController(
  tablefinder
);
