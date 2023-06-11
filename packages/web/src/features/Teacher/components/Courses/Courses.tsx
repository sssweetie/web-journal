import { Course } from '../Course/Course';
import { CoursesSection } from '../MainContent/styled';
import { useCourses } from './hooks/useCourses';
import { coursesApi } from './api/coursesApi';
import { httpClient } from '../../../services/httpClient';

export const Courses = () => {
  const { courses } = useCourses(coursesApi(httpClient));

  return (
    <CoursesSection>
      {courses.map((course: any) => (
        <Course key={course.id} data={course} />
      ))}
    </CoursesSection>
  );
};
