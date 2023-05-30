import { Student } from './Students';
import { IHomework } from './Courses';

export interface ISchedule {
  date_start: string;
  date_end: string;
  type: string;
  name: string;
  repeatWeek: boolean;
  repeatTwoWeek: boolean;
}

export interface Teacher extends Student {
  link: string;
  events: ISchedule[];
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
