import { InMemoryCustomerRepository } from './database/in-memory-customer-repository';

// import { CustomerCreator } from '../application/customer-create-use-case';
// import { CustomerFindByNumberPhone } from '../application/customer-find-number-phone-use-case';

export const dbCustomerRepository = new InMemoryCustomerRepository();

// export const customerCreator = new CustomerCreator(dbReservationRepository);
// export const customerFindByNumberPhone = new CustomerFindByNumberPhone(
//   dbReservationRepository
// );
