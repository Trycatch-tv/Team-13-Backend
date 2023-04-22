import { Customer } from './customer';

export interface CustomerRepository {
  save(customer: Customer): Promise<Customer>;
  findByNumberPhone(number_phone: string | number): Promise<Customer | null>;
  findById(id: string | number): Promise<Customer | null>;
}
