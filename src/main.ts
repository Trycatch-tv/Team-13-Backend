import express from 'express';
import cors from 'cors';
import { config as dotEnvConfig } from 'dotenv';
dotEnvConfig();

import { config } from './config';
import { tableRouter } from './table/infrastructure/http/tableRouter';
import { reservationRouter } from './reservation/infrastructure/http/reservationRouter';

function boostrap() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/api/tables', tableRouter);
  app.use('/api/reservations', reservationRouter);

  app.use('/api/health', (_, res) => {
    res.send('checked');
  });

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`Starting application on ${port}`);
  });
}

boostrap();
