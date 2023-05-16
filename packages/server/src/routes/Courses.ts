import { error } from 'console';
import { Router } from 'express';
import { LoginController } from '../controllers/Login';
import { CoursesController } from '../controllers/Courses';

export const coursesRouter = Router();

coursesRouter.get('/:id', async (req, res) => {
  try {
    const result = await CoursesController.getData(req.params.id);
    res.sendStatus(200);
  } catch {
    res.status(400);
  }
});

// coursesRouter.post('/', async (req, res) => {
//   try {
//     const result = await LoginController.login(req.body);
//     if (result) res.sendStatus(200);
//     else res.sendStatus(401);
//   } catch {
//     console.error(error);
//     res.sendStatus(422);
//   }
// });
