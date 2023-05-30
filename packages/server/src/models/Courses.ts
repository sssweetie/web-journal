import { Courses } from '@web-journal/libs';
import { model, Schema } from 'mongoose';

const coursesSchema = new Schema<Courses>({
  name: String,
  groupsId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'groups',
    },
  ],
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: 'teachers',
  },
  labs: [
    {
      name: String,
      maxMark: Number,
      homework: [
        {
          studentsId: {
            type: Schema.Types.ObjectId,
            ref: 'students',
          },
          date: String,
          mark: Number,
          comment: String,
          additional: String,
          checked: String,
        },
      ],
    },
  ],
});

export const CoursesModel = model<Courses>('courses', coursesSchema);
