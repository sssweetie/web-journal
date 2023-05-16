import { CoursesModel } from '../models/Courses';

export const CoursesController = {
  getData: async (id: string) => {
    const result = await CoursesModel.findById(id);
    console.log(result);
    return result;
  },
};
