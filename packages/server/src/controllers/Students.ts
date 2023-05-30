import { StudentsModel } from '../models/Students';
import { CoursesModel } from '../models/Courses';

export const StudentsController = {
  getStudents: async (studentsId: string[], labsId: string, courseId) => {
    const students = await Promise.all(
      studentsId.map(
        async (studentId: string) => await StudentsModel.findById(studentId)
      )
    );

    const course = await CoursesModel.findOne({
      _id: courseId,
    });

    const lab = course.labs.find((lab: any) => lab._id.toString() === labsId);

    return { students, lab };
  },
};
