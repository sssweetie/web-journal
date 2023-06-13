import { Router } from 'express';
import { StudentsController } from '../controllers/Students';

export const studentsRouter = Router();

studentsRouter.get('/course/:courseId/lab/:labId', async (req, res) => {
  try {
    const students = req.query.students as string;
    const studentsId = students.split(',');
    const studentList = await StudentsController.getStudents(
      studentsId,
      req.params.labId,
      req.params.courseId
    );

    res.status(200).send(studentList);
  } catch (error) {
    res.sendStatus(400);
  }
});
