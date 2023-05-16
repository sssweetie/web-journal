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
    },
  ],
});

export const CoursesModel = model<Courses>('courses', coursesSchema);
