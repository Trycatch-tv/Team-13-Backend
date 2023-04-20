import { Customer, CustomerDto } from '../dominio/customer';
import { CustomerRepository } from '../dominio/customer-repository';

export class CustomerCreator {
  constructor(private readonly _customerRepository: CustomerRepository) {}

  async run(createReservationDto: CustomerDto): Promise<Customer> {
    const customer = new Customer(
      createReservationDto.name,
      createReservationDto.number_phone
    );

    return await this._customerRepository.save(customer);
  }
}
