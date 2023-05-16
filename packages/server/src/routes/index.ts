import { coursesRouter } from './Courses';
import { loginRouter } from './Login';
import { Router } from 'express';
import { teacherRouter } from './Teacher';

export const router = Router();

router.use('/login', loginRouter);
router.use('/teacher', coursesRouter);
router.use('/teacher', teacherRouter);
