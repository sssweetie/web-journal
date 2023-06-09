import { ObjectId } from 'mongoose';

export interface ScheduleExtra {
  type: string;
  day: number[];
}

export interface Schedule {
  name: string;
  _id: ObjectId;
  teacherId: ObjectId;
  groupId: ObjectId;
  lessonType: string;
  cab: string;
  startTime: string;
  schedule: ScheduleExtra;
}
