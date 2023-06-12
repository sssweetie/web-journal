import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface TeacherApi {
  getPersonalInfo: (id: string | undefined) => Promise<any>;
}

export const useTeacher = (teacherApi: TeacherApi) => {
  const params = useParams();
  const [teacher, setTeacher] = useState<any>({});

  const getPersonalInfo = async () => {
    try {
      const res = await teacherApi.getPersonalInfo(params.teacherId);
      const teacher = {
        courseData: res.courseData,
        groups: res.groups,
        teacher: res._doc,
      };

      setTeacher(teacher);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPersonalInfo();
  }, []);

  return { getPersonalInfo, teacher };
};
