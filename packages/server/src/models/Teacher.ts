import { model, Schema } from 'mongoose';

const teacherSchema = new Schema<any>({
  name: String,
  link: String,
  mail: String,
});

export const TeacherModel = model<any>('teachers', teacherSchema);
