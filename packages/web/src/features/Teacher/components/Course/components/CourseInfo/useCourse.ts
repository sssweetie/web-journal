import React, { useEffect, useState } from 'react';

interface CourseApi {
  getCourse: () => Promise<any>;
}

export const useCourse = (courseApi: CourseApi) => {
  const [courseInfo, setCourseInfo] = useState<any>({});
  const getCourseInfo = async () => {
    try {
      const res = await courseApi.getCourse();
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
