import { Router } from 'express';
import { TeacherController } from '../controllers/Teacher';

export const teacherRouter = Router();

teacherRouter.get('/:id/main', async (req, res) => {
  try {
    const result = await TeacherController.getData(req.params.id);
    res.status(200).send(result);
  } catch {
    res.status(400);
  }
});
