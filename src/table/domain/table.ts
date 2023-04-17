import { v4 as uuidv4 } from "uuid";

import { locationEnum } from "./location";

export class Table {
  public readonly id: string;
  public readonly number_table: number;
  public readonly capacity: number;
  public readonly location: locationEnum;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(number_table: number, capacity: number, location: locationEnum) {
    this.id = uuidv4();
    this.number_table = number_table;
    this.capacity = capacity;
    this.location = location;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export type TableDto = Omit<Table, "id" | "createdAt" | "updatedAt">;
