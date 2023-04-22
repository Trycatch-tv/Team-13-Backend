export class TableNotFound extends Error {
  constructor(id: string | number) {
    super(`Table not found "${id}"`);
  }
}
