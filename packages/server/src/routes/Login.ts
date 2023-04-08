import { error } from 'console';
import { Router } from 'express';
import { LoginController } from '../controllers/Login';

export const loginRouter = Router();

loginRouter.post('/', async (req, res) => {
  try {
    await LoginController.login(req.body);
    res.sendStatus(200);
  } catch {
    console.error(error);
    res.sendStatus(422);
  }
});
