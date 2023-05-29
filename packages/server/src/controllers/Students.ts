import { ObjectId } from 'mongoose';
import { StudentsModel } from '../models/Students';

export const StudentsController = {
  getStudents: async (studentsId: string[]) => {
    const res = await Promise.all(
      studentsId.map(
        async (studentId: string) => await StudentsModel.findById(studentId)
      )
    );
    return res;
  },
};
