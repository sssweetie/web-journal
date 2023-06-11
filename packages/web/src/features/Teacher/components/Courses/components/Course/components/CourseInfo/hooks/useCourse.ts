import { Student } from '@web-journal/libs';
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export interface CourseApi {
  getCourse: (id: string | undefined) => Promise<Course>;
  getStudents: (url: string, labId: string, query: string) => Promise<any>;
}

interface Course {
  _id: string;
  teacherId: string;
  name: string;
  labs: any[];
  groupsId: string;
}

export const useCourse = (courseApi: CourseApi) => {
  const location = useLocation();
  const [loader, setLoader] = useState(false);
  const [courseInfo, setCourseInfo] = useState<Course | undefined>(undefined);
  const [statement, setStatement] = useState<any>([]);

  const params = useParams();

  const getCourseInfo = async () => {
    try {
      setLoader(true);
      const res = await courseApi.getCourse(params.courseId);
      setCourseInfo(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
    }
  };

  const getStudents = async () => {
    if (courseInfo) {
      const studentsGeneral: any[] = [];
      for (const lab of courseInfo.labs) {
        let arrayToString = lab.homework.map((homework: any) => homework._id);
        arrayToString = arrayToString.join(',');

        const res = await courseApi.getStudents(
          location.pathname.slice(4),
          lab._id,
          arrayToString
        );

        const homework = res.lab.homework;

        const students = homework.map((item: any) => {
          const student = res.students.find(
            (dataItem: any) => dataItem._id === item._id
          );
          return { ...student, mark: item.mark };
        });
        studentsGeneral.push(students);
      }

      const mergedArray = studentsGeneral.reduce((result, currentArray) => {
        currentArray.forEach((studentToFind: any) => {
          const existingStudent = result.find(
            (student: any) => student._id === studentToFind._id
          );
          if (existingStudent) {
            console.log('exist');
            existingStudent.mark += studentToFind.mark; // Суммируем поле mark
          } else {
            console.log('nonexist');
            result.push(studentToFind); // Добавляем нового студента
          }
        });
        return result;
      }, []);

      setStatement(mergedArray);
    }
  };

  useEffect(() => {
    getCourseInfo();
  }, []);

  useEffect(() => {
    getStudents();
  }, [courseInfo]);

  return { courseInfo, getStudents, statement };
};
