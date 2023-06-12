import { Schema } from 'mongoose';

interface GroupsId {
  type: Schema.Types.ObjectId;
  ref: string;
}

interface File {
  name: string;
  data: Buffer;
}

interface Lab {
  name: string;
  maxMark: number;
  file: File[];
  homework: Homework[];
}

export interface Courses {
  name: string;
  groupsId: Array<GroupsId>;
  teacherId: Schema.Types.ObjectId;
  labs: Array<Lab>;
}

export interface Homework {
  _id: string;
  studentId: string;
  comment: string;
  mark: number;
  date: string;
  courseId?: string;
  pathname?: string;
  labId?: string;
}
