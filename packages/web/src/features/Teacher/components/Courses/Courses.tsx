import { CoursesSection } from '../MainContent/styled';
import { useCourses } from './hooks/useCourses';
import { coursesApi } from './api/coursesApi';
import { httpClient } from '../../../services/httpClient';
import { Course } from './components/Course';

export const Courses = () => {
  const { courses } = useCourses(coursesApi(httpClient));

  return (
    // Отображение всех курсов
    <CoursesSection>
      {courses.map((course: any) => (
        <Course key={course.id} data={course} />
      ))}
    </CoursesSection>
  );
};
