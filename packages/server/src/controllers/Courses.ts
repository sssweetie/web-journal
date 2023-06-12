// import { IHomework } from '@web-journal/libs';
import mongoose from 'mongoose';
import { CoursesModel } from '../models/Courses';
import { GroupsController } from './Groups';
import { FileDB } from '@web-journal/libs';

export const CoursesController = {
  getData: async (courseId: string) => {
    const result = await CoursesModel.findById(courseId);
    return result;
  },

  getAllCourses: async (teacherId: string) => {
    const courseData = await CoursesModel.find({ teacherId });
    const promises = courseData.map((course: any) =>
      GroupsController.getGroups(course.groupsId)
    );
    const groups = (await Promise.all(promises)).flat(1);
    return { courseData, groups };
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

  updateLab: async (id: string, file: FileDB) => {
    try {
      const newFile = {
        _id: new mongoose.Types.ObjectId(),
        name: file.name,
        data: file.data,
      };

      await CoursesModel.updateOne(
        { 'labs._id': id },
        { $push: { 'labs.$.file': newFile } },
        { new: true }
      );
    } catch (error) {
      console.log(error);
    }
  },
};
