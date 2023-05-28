import { ObjectId } from 'mongoose';
import { CoursesModel } from '../models/Courses';
import { GroupsController } from './Groups';

export const CoursesController = {
  getData: async (id: string) => {
    const result = await CoursesModel.findById(id);
    return result;
  },

  getAllCourses: async (teacherId: string) => {
    const courceData = await CoursesModel.find({ teacherId });
    const promises = courceData.map((course: any) =>
      GroupsController.getGroups(course.groupsId)
    );
    const groups = (await Promise.all(promises)).flat(1);
    return { courceData, groups };
  },
};
