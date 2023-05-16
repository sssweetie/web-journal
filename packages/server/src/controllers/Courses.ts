import { CoursesModel } from '../models/Courses';

export const CoursesController = {
  getData: async (id: string) => {
    const result = await CoursesModel.findById(id);
    return result;
  },

  getAllCourses: async () => {
    const result = await CoursesModel.find({});

    return result;
  },
};
