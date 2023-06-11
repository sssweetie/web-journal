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
    await ScheduleController.rescheduleActivity(
      req.body.oldActivity.id,
      req.body.oldActivity.currentDate,
      req.body.newActivity
    );

    res.sendStatus(200);
  } catch {
    res.sendStatus(422);
  }
});
