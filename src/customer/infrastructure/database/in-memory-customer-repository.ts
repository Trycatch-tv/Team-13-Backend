import { Customer } from '../../dominio/customer';
import { CustomerRepository } from '../../dominio/customer-repository';
import { CUSTOMER } from './customer-collection';

export class InMemoryCustomerRepository implements CustomerRepository {
  async save(customer: Customer): Promise<Customer> {
    CUSTOMER.push(customer);
    return customer;
  }

  async findById(id: string | number): Promise<Customer | null> {
    const customer = CUSTOMER.find((customer) => id === customer.id);
    return customer ?? null;
  }

  async findByNumberPhone(
    number_phone: string | number
  ): Promise<Customer | null> {
    const customer = CUSTOMER.find(
      (customer) => number_phone === customer.number_phone
    );
    return customer ?? null;
  }
}
