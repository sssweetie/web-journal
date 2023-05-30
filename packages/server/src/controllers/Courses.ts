// import { IHomework } from '@web-journal/libs';
import { IHomework } from '@web-journal/libs';
import { CoursesModel } from '../models/Courses';
import { GroupsController } from './Groups';
import mongoose from 'mongoose';

export const CoursesController = {
  getData: async (courseId: string) => {
    const result = await CoursesModel.findById(courseId);
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

  updateHomework: async (homework: any) => {
    await CoursesModel.updateOne(
      {
        _id: homework.courseId,
        'labs._id': homework.labId,
        'labs.homework._id': homework.studentId,
      },
      {
        $set: {
          'labs.$[lab].homework.$[homework].mark': homework.mark,
          'labs.$[lab].homework.$[homework].comment': homework.comment,
          'labs.$[lab].homework.$[homework].checked': 'Проверено',
        },
      },
      {
        arrayFilters: [
          { 'lab._id': homework.labId },
          { 'homework._id': homework.studentId },
        ],
      }
    );
  },
};
