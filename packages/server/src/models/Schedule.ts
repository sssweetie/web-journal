import { Schedule } from '@web-journal/libs';
import { model, Schema } from 'mongoose';

const scheduleSchema = new Schema<Schedule>(
  {
    name: String,
    teacherId: {
      type: Schema.Types.ObjectId,
      ref: 'teachers',
    },
    groupId: {
      type: Schema.Types.ObjectId,
      ref: 'groups',
    },
    lessonType: String,
    cab: String,
    startTime: String,
    schedule: {
      type: String,
      day: [Number],
    },
  },
  { collection: 'schedule' }
);

export const ScheduleModel = model<Schedule>('schedule', scheduleSchema);
