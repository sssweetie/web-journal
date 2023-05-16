import { Router } from 'express';
import { LoginController } from '../controllers/Login';

export const loginRouter = Router();

loginRouter.post('/', async (req, res) => {
  try {
    const result = await LoginController.login(req.body);
    res.sendStatus(200);
  } catch {
    res.sendStatus(422);
  }
});
