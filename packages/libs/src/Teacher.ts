import { Student } from './Students';
import { Homework } from './Courses';

export interface Teacher extends Student {
  link: string;
}

export interface ILab {
  students: Student[];
  homework: Homework[];
}
