import mongoose from 'mongoose';
import { CoursesModel } from '../models/Courses';
import { GroupsController } from './Groups';
import { FileDB } from '@web-journal/libs';

export const CoursesController = {
  // Получить информацию по курсу
  getData: async (courseId: string) => {
    const result = await CoursesModel.findById(courseId);
    return result;
  },

  // Получить информацию по всем курсам, сопоставив их с группами
  getAllCourses: async (teacherId: string) => {
    const courseData = await CoursesModel.find({ teacherId });
    const promises = courseData.map((course: any) =>
      GroupsController.getGroups(course.groupsId)
    );
    const groups = (await Promise.all(promises)).flat(1);
    return { courseData, groups };
  },

  //Обновить статус домашней работы
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
  
  //Обновить документ в лабораторной работе
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
