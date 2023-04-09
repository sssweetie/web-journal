import { error } from 'console';
import { Router } from 'express';
import { LoginController } from '../controllers/Login';

export const loginRouter = Router();

loginRouter.post('/', async (req, res) => {
  try {
    const result = await LoginController.login(req.body);
    if (result === true) res.sendStatus(200);
    else res.sendStatus(401);
  } catch {
    console.error(error);
    res.sendStatus(422);
  }
});
