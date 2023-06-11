import { Schedule } from '@web-journal/libs';
import { ScheduleModel } from '../models/Schedule';

export const ScheduleController = {
  getSchedule: async (id: string) => {
    const res = await ScheduleModel.find({ teacherId: id });
    return res;
  },
  rescheduleActivity: async (
    id: string,
    excludeDate: string,
    newActivity: Schedule
  ) => {
    await ScheduleModel.findOneAndUpdate({ id }, { $push: { excludeDate } });
    await ScheduleModel.insertMany([
      {
        teacherId: newActivity.teacherId,
        groupId: newActivity.groupId,
        lessonType: newActivity.lessonType,
        cab: newActivity.cab,
        startTime: newActivity.startTime,
        name: newActivity.name,
        startDate: newActivity.startDate,
        scheduleType: newActivity.scheduleType,
        excludeDate: newActivity.excludeDate,
      },
    ]);
  },
};
