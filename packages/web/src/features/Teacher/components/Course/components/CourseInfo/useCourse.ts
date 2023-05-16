import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
interface CourseApi {
  getCourse: (id: string | undefined) => Promise<any>;
}

export const useCourse = (courseApi: CourseApi) => {
  const params = useParams();

  const [courseInfo, setCourseInfo] = useState<any>({});
  const getCourseInfo = async () => {
    try {
      const res = await courseApi.getCourse(params.courseId);
      setCourseInfo(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCourseInfo();

    return () => {
      console.log('Cleaning function');
    };
  }, []);
  return { courseInfo };
};
