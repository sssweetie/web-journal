import { Schema } from 'mongoose';

interface Group {
  type: Schema.Types.ObjectId;
  ref: string;
}

interface Lab {
  name: string;
  maxMark: number;
}

export interface Courses {
  name: string;
  groupsId: Array<Group>;
  teacherId: Schema.Types.ObjectId;
  labs: Array<Lab>;
}
