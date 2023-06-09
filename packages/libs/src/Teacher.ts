import { Student } from './Students';
import { IHomework } from './Courses';

export interface Teacher extends Student {
  link: string;
}

export interface IPlannedEvent {
  name: string;
  date: string;
  backgroundColor: string;
  type: string;
}

export interface ILab {
  students: Student[];
  homework: IHomework[];
}
