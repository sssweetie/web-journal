import React, { useState, useEffect } from 'react';
import { Course } from '../Course/Course';
import { CoursesSection } from '../MainContent/styled';
import { useParams } from 'react-router-dom';
import { getCourses } from 'packages/web/src/utils';
import { httpClient } from '../../../services/httpClient';

export const Courses = () => {
  const [courses, setCourses] = useState([]);

  const params = useParams();

  const loadData = async () => {
    const data = await getCourses(httpClient, params.teacherId);
    const array = data.courceData.map((course: any, index: number) => ({
      courseData: course,
      groupData: data.groups[index],
    }));
    setCourses(array);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <CoursesSection>
      {courses.map((data: any) => (
        <Course key={data.id} data={data} />
      ))}
    </CoursesSection>
  );
};
