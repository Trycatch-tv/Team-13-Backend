export class ApiResponse<T> {
  constructor(
    public readonly status: string,
    public readonly message: string,
    public readonly data?: T
  ) {}
}
