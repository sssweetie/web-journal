import { Router } from 'express';
import { CoursesController } from '../controllers/Courses';

export const coursesRouter = Router();

coursesRouter.get('/:teacherId/course/:courseId', async (req, res) => {
  try {
    const result = await CoursesController.getData(req.params.courseId);
    res.status(200).send(result);
  } catch {
    res.sendStatus(400);
  }
});

coursesRouter.post(
  '/:teacherId/course/:courseId/lab/:labId/edit',
  async (req, res) => {
    try {
      await CoursesController.updateLab(req.params.labId, req.body);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

coursesRouter.put(
  '/:teacherId/course/:courseId/lab/:labId/:studentId',
  async (req, res) => {
    try {
      const body = {
        courseId: req.params.courseId,
        ...req.body,
        labId: req.params.labId,
      };
      await CoursesController.updateHomework(body);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.sendStatus(400);
    }
  }
);

coursesRouter.get('/:teacherId/courses', async (req, res) => {
  try {
    const courses = await CoursesController.getAllCourses(req.params.teacherId);
    res.status(200).send(courses);
  } catch {
    res.sendStatus(400);
  }
});
