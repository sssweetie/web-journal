import { LoginModel } from '../models/Login';
import { User } from '@web-journal/libs';
import { ScheduleModel } from '../models/Schedule';

export const ScheduleController = {
  login: async (data: User) => {
    const result = await LoginModel.findOne(data);
    return result === null ? false : true;
  },
  getSchedule: async (id: string) => {
    const res = await ScheduleModel.find({ teacherId: id });
    return res;
  },
};
