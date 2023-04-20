import { Customer } from '../dominio/customer';
import { CustomerRepository } from '../dominio/customer-repository';

export class CustomerFindByNumberPhone {
  constructor(private readonly _customerRepository: CustomerRepository) {}

  async run(number_phone: string | number): Promise<Customer | null> {
    const customer = await this._customerRepository.findByNumberPhone(
      number_phone
    );
    if (customer === null) {
      return null;
    }
    return customer;
  }
}
