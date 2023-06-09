import { coursesRouter } from './Courses';
import { loginRouter } from './Login';
import { Router } from 'express';
import { teacherRouter } from './Teacher';
import { studentsRouter } from './Students';
import { scheduleRouter } from './Schedule';

export const router = Router();

router.use('/login', loginRouter);
router.use('/teacher', coursesRouter);
router.use('/teacher', teacherRouter);
router.use('/teacher/:teacherId', studentsRouter);
router.use('/teacher', scheduleRouter);
