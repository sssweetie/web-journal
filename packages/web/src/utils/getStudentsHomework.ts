import { Homework } from '@web-journal/libs';

export const getStudentsHomework = (res: any) => {
  // Соединение студентов со сданными домашними работами
  const homework = res.lab.homework;
  const students = homework.map((hw: Homework) => {
    const student = res.students.find(
      (dataItem: any) => dataItem._id === hw._id
    );
    return {
      ...student,
      ...hw,
    };
  });
  return students;
};
