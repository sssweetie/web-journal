import { Schema } from 'mongoose';

interface GroupsId {
  type: Schema.Types.ObjectId;
  ref: string;
}

interface Lab {
  name: string;
  maxMark: number;
  passed: any[];
  unpassed: any[];
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
  courseId?: string;
  pathname?: string;
  labId?: string;
}
