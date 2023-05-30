import { useAppDispatch, useAppSelector } from 'packages/web/src/store/hooks';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
interface CourseApi {
  getCourse: (id: string | undefined) => Promise<ICourse>;
}

interface ICourse {
  _id: string;
  teacherId: string;
  name: string;
  labs: any[];
  groupsId: string;
}

export const useCourse = (courseApi: CourseApi) => {
  const [loader, setLoader] = useState(false);
  const [courseInfo, setCourseInfo] = useState<any>({});
  const params = useParams();

  const getCourseInfo = async () => {
    try {
      setLoader(true);
      const res = await courseApi.getCourse(params.courseId);
      console.log(res);
      setCourseInfo(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoader(false);
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
