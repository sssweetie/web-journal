// import { IHomework } from '@web-journal/libs';
import mongoose from 'mongoose';
import { CoursesModel } from '../models/Courses';
import { GroupsController } from './Groups';

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

  updateLab: async (id: any, file: any) => {
    const objectId = new mongoose.Types.ObjectId(id);
    const res = await CoursesModel.findOneAndUpdate(
      { labs: { $elemMatch: { _id: objectId } } },
      { 'labs.$': 1 }
    );
    console.log(res);
    // if (res) {
    //   const lab = res.labs.find((lab) => lab._id.toString() === id);
    // }
  },
};
