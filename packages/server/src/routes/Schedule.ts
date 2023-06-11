import { Router } from 'express';
import { ScheduleController } from '../controllers/Schedule';

export const scheduleRouter = Router();

scheduleRouter.get('/:teacherId/calendar', async (req, res) => {
  try {
    const result = await ScheduleController.getSchedule(req.params.teacherId);
    res.status(200).send(result);
  } catch {
    res.sendStatus(422);
  }
});

scheduleRouter.post('/:teacherId/calendar', async (req, res) => {
  try {
    const result = await ScheduleController.rescheduleActivity(
      req.body.activityId,
      req.body.excludeDate,
      req.body.newActivity
    );
  } catch {
    res.sendStatus(422);
  }
});
