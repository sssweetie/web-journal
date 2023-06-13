import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface ICoursesApi {
  getCourses: (teacherId: string | undefined) => Promise<any>;
}

export const useCourses = (coursesApi: ICoursesApi) => {
  const [courses, setCourses] = useState([]);

  const params = useParams();

  // Получение списка курсов
  const getCourses = async () => {
    try {
      const res = await coursesApi.getCourses(params.teacherId);
      const array = res.courseData.map((course: any, index: number) => ({
        key: index,
        courseData: course,
        groupData: res.groups[index],
      }));

      setCourses(array);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return { getCourses, courses };
};
