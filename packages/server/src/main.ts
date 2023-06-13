/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import './db';
import express from 'express';
import cors from 'cors';
import { router } from './routes';


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/api`);
});
