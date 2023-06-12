import { Router } from 'express';
import { LoginController } from '../controllers/Login';

export const loginRouter = Router();

loginRouter.post('/', async (req, res) => {
  try {
    const user = await LoginController.login(req.body);
    if (!user) {
      res.status(404).send({ message: 'Пользователя не существует' });
    } else if (req.body.password !== user.password) {
      res.status(401).send({ message: 'Неверный пароль' });
    } else {
      res.status(200).send({ message: 'Вход выполнен успешно' });
    }
  } catch {
    res.status(500).send({ message: 'Ошибка при входе' });
  }
});
