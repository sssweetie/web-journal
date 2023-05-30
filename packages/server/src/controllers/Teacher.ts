import { TeacherModel } from '../models/Teacher';

export const TeacherController = {
  getData: async (id: string) => {
    const result = await TeacherModel.findById(id);
    return result;
  },
};
