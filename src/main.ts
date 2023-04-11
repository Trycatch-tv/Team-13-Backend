import express from 'express';
import { config as dotEnvConfig } from 'dotenv';
dotEnvConfig();

import { config } from './config';

function boostrap() {
  const app = express();

  app.use(express.json());

  app.use('/api/health', (_, res) => {
    res.send('checked');
  });

  const { port } = config.server;

  app.listen(port, () => {
    console.log(`Starting application on ${port}`);
  });
}

boostrap();
