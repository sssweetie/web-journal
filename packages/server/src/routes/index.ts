import { loginRouter } from './Login';
import { Router } from 'express';

export const router = Router();

router.use('/login', loginRouter);
