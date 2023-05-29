import { model, Schema } from 'mongoose';
import { Student } from '@web-journal/libs';

const studentsSchema = new Schema<Student>(
  {
    name: String,
    mail: String,
  },
  { collection: 'students' }
);

export const StudentsModel = model<Student>('students', studentsSchema);
