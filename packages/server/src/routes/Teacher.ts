import { Router } from 'express';
import { TeacherController } from '../controllers/Teacher';
import { CoursesController } from '../controllers/Courses';

export const teacherRouter = Router();

teacherRouter.get('/:teacherId/main', async (req, res) => {
  try {
    const teacher = await TeacherController.getData(req.params.teacherId);
    const courses = await CoursesController.getAllCourses(req.params.teacherId);
    const result = { ...teacher, ...courses };
    res.status(200).send(result);
  } catch {
    res.status(400);
  }
});

teacherRouter.get('/:teacherId/calendar', async (req, res) => {
  try {
    const teacher = await TeacherController.getData(req.params.teacherId);
    res.status(200).send(teacher);
  } catch {
    res.status(400);
  }
});
