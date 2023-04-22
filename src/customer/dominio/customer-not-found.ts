export class CustomerNotFound extends Error {
  constructor(id: string | number) {
    super(`Customer not found "${id}"`);
  }
}
