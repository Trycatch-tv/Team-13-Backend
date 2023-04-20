import { Reservation } from '../../domain/reservation';
import { statusEnum } from '../../domain/reservation-status';

export const RESERVATIONS: Reservation[] = [
  {
    id: 'O99Yq4Zx-jgJv-IY5X-62yr-uEMcrgVKfX5y',
    status: statusEnum.CONFIRMED,
    customer_id: '33bae21c-7cb1-4571-b3f6-97c91842e82b',
    number_people: 4,
    table_id: '6744d3a0-6418-424e-93b3-cf88350981bb',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'hwTLq4C4-f76y-yfY1-o4lC-kyk4WwwvPuhD',
    status: statusEnum.CONFIRMED,
    customer_id: 'b6a3f98c-5e7f-4576-907e-896ba79c3ae6',
    number_people: 2,
    table_id: 'c36a7d10-5a54-4cea-8acf-794eaf161efe',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'oyZ2sW2W-5mcp-s1zs-dqM3-2EPGiocqj3N3',
    status: statusEnum.CONFIRMED,
    customer_id: 'a61062fe-0a51-4be8-8e6d-0ca2306a339c',
    number_people: 3,
    table_id: '5bee0afa-6d46-4cfb-bc9d-ee2fd4e706f3',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'Q5x3Y0HN-Zava-okAU-KP1e-KUzWj16rw2Mq',
    status: statusEnum.CONFIRMED,
    customer_id: '7bb4a624-0e85-41b8-b780-459816a31642',
    number_people: 6,
    table_id: '1fa03ba9-8d6f-472d-a8a8-81acf66b7dde',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
