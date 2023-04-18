import { Reservation } from '../../domain/reservation';

export const RESERVATIONS: Reservation[] = [
  {
    idReservation: 'O99Yq4Zx-jgJv-IY5X-62yr-uEMcrgVKfX5y',
    client: 'Fabian Delgado',
    number_people: 4,

    table: {
      id: '5bee0afa-6d46-4cfb-bc9d-ee2fd4e706f3',
      number_table: 1,
      capacity: 4,
      location: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    idReservation: 'hwTLq4C4-f76y-yfY1-o4lC-kyk4WwwvPuhD',
    client: 'Fabian Pico',
    number_people: 2,

    table: {
      id: '6744d3a0-6418-424e-93b3-cf88350981bb',
      number_table: 4,
      capacity: 2,
      location: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    idReservation: 'oyZ2sW2W-5mcp-s1zs-dqM3-2EPGiocqj3N3',
    client: 'Hector Wagner',
    number_people: 3,

    table: {
      id: 'c36a7d10-5a54-4cea-8acf-794eaf161efe',
      number_table: 3,
      capacity: 4,
      location: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    idReservation: 'Q5x3Y0HN-Zava-okAU-KP1e-KUzWj16rw2Mq',
    client: 'Maria Delgado',
    number_people: 6,

    table: {
      id: '1fa03ba9-8d6f-472d-a8a8-81acf66b7dde',
      number_table: 2,
      capacity: 8,
      location: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
