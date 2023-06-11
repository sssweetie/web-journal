import { ObjectId } from 'mongoose';

export interface Schedule {
  name: string;
  _id: ObjectId;
  teacherId: ObjectId;
  groupId: ObjectId;
  lessonType: string;
  cab: string;
  startTime: string;
  scheduleType: string;
  startDate: string;
  endDate: string;
  excludeDate: string[];
}
