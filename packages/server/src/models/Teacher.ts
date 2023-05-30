import { Teacher } from '@web-journal/libs';
import { model, Schema } from 'mongoose';

const teacherSchema = new Schema<Teacher>(
  {
    name: String,
    link: String,
    mail: String,
    // events: [
    //   {
    //     date_start: Date,
    //     date_end: Date,
    //     name: String,
    //     type: String,
    //     repeatWeek: Boolean,
    //     repeatTwoWeeks: Boolean,
    //   },
    // ],
  },
  { collection: 'teachers' }
);

export const TeacherModel = model<Teacher>('teachers', teacherSchema);
