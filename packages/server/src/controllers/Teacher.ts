import { TeacherModel } from '../models/Teacher';

export const TeacherController = {

  //Получить информацию о преподавателе
  getData: async (id: string) => {
    const result = await TeacherModel.findById(id);
    return result;
  },
};
