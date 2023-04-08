/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { router } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api', router);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/api`);
});
