import { Teacher } from '@web-journal/libs';
import { model, Schema } from 'mongoose';

const teacherSchema = new Schema<Teacher>(
  {
    name: String,
    link: String,
    mail: String,
    firstName: String,
    lastName: String,
    surname: String,
  },
  { collection: 'teachers' }
);

export const TeacherModel = model<Teacher>('teachers', teacherSchema);
