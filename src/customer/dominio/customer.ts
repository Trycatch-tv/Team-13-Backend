import { v4 as uuidv4 } from 'uuid';

export class Customer {
  public readonly id: string | number;
  public readonly name: string;
  public readonly number_phone: number;
  public readonly createdAt: Date;

  constructor(name: string, number_phone: number) {
    this.id = uuidv4();
    this.name = name;
    this.number_phone = number_phone;
    this.createdAt = new Date();
  }
}

export type CustomerDto = Omit<Customer, 'id' | 'createdAt'>;
