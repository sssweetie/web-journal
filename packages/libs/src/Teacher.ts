import { Student } from './Students';
import { IHomework } from './Courses';

export interface Teacher extends Student {
  link: string;
}

export interface ILab {
  students: Student[];
  homework: IHomework[];
}
