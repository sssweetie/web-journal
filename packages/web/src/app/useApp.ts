import React, { useEffect, useState } from 'react';

interface CourseApi {
  getAllCourses: () => Promise<any>;
}

export const useApp = (appApi: CourseApi) => {
  const [courses, setCourses] = useState<any>([]);
  const getCourses = async () => {
    try {
      const res = await appApi.getAllCourses();
      setCourses(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCourses();
    return () => {
      console.log('Cleaning app');
    };
  }, []);
  return { courses };
};
