import { Router } from 'express';
import { CoursesController } from '../controllers/Courses';

export const coursesRouter = Router();

coursesRouter.get('/:id', async (req, res) => {
  try {
    const result = await CoursesController.getData(req.params.id);
    res.status(200).send(result);
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
