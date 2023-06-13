import { Homework, Student } from '@web-journal/libs';
import { useAppDispatch } from 'packages/web/src/store/hooks';
import { getStudentsHomework } from 'packages/web/src/utils';
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

interface Statement extends Student {
  mark: number;
}

export const useCourse = (courseApi: CourseApi) => {
  const location = useLocation();
  const [loader, setLoader] = useState(false);
  const [courseInfo, setCourseInfo] = useState<Course | undefined>(undefined);
  const [statement, setStatement] = useState<Statement[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const params = useParams();

  // Получение информации о курсе
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

  // Получение информации о студентах
  const getStudents = async () => {
    const res = await courseApi.getStudents(
      location.pathname.slice(4, -29),
      params!.labId!,
      location!.search!.slice(10)
    );

    setStudents(getStudentsHomework(res));
  };


  // Получение информации о ведомостях
  const getStatement = async () => {
    try {
      if (courseInfo) {
        const studentsGeneral: any[] = [];
        for (const lab of courseInfo.labs) {
          let arrayToString = lab.homework.map(
            (homework: Homework) => homework._id
          );
          arrayToString = arrayToString.join(',');

          const res = await courseApi.getStudents(
            location.pathname.slice(4),
            lab._id,
            arrayToString
          );

          studentsGeneral.push(getStudentsHomework(res));
        }

        // Подсчёт баллов студентов по всем лабораторным работам
        const mergedArray = studentsGeneral.reduce((result, currentArray) => {
          currentArray.forEach((studentToFind: any) => {
            const existingStudent = result.find(
              (student: Student) => student._id === studentToFind._id
            );

            if (existingStudent) {
              existingStudent.mark += studentToFind.mark; // Суммируем поле mark
            } else {
              result.push(studentToFind); // Добавляем нового студента
            }
          });
          return result;
        }, []);
        setStatement(mergedArray);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!params.labId) {
      getCourseInfo();
    } else {
      getStudents();
    }
  }, []);

  useEffect(() => {
    getStatement();
  }, [courseInfo]);

  return { courseInfo, getStudents, statement, getStatement, students };
};
