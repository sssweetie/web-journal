// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Login } from '../features/Login/Login';
import { Teacher } from '../features/Teacher/Teacher';
import * as S from './styled';
import { Route, Routes } from 'react-router-dom';
import { Calendar } from '../features/Calendar';
import { CourseInfo } from '../features/Teacher/components/Course/components/CourseInfo';
import { MainContent } from '../features/Teacher/components/MainContent';
import { Course } from '../features/Teacher/components/Course';
import { PlannedEvent } from '../features/Teacher/components/PlannedEvent';
import { Lab } from '../features/Teacher/components/Course/components/CourseInfo/components/Lab';
import {
  Courses,
  Title,
} from '../features/Teacher/components/MainContent/styled';
import { Settings } from '../features/Teacher/components/Settings';

export function App() {
  const courses = [
    { name: 'Eng', description: 'Some description' },
    { name: 'Eng', description: 'Some description' },
    { name: 'Eng', description: 'Some description' },
    { name: 'Eng', description: 'Some description' },
    { name: 'Eng', description: 'Some description' },
    { name: 'Eng', description: 'Some description' },
    { name: 'Eng', description: 'Some description' },
  ];
  const plannedEvents = [
    { name: 'Utilization', date: 'MN 10:00', lesson: 'Lesson 6' },
    { name: 'Utilization', date: 'MN 10:00', lesson: 'Lesson 6' },
    { name: 'Utilization', date: 'MN 10:00', lesson: 'Lesson 6' },
    { name: 'Utilization', date: 'MN 10:00', lesson: 'Lesson 6' },
  ];
  const settings = ['Main', 'Courses', 'Calendar', 'Settings'];
  const personalInfo = {
    name: 'Yarik',
    status: 'Teacher',
  };

  return (
    <S.Wrapper>
      <Routes>
        <Route path="/api/login" element={<Login />} />
        <Route
          path="/api/teacher/main"
          element={
            <Teacher
              content={
                <MainContent
                  courses={courses.map(
                    (course, index) => index < 3 && <Course course={course} />
                  )}
                  plannedEvents={plannedEvents.map(
                    (plannedEvent, index) =>
                      index < 4 && <PlannedEvent plannedEvent={plannedEvent} />
                  )}
                />
              }
            />
          }
        />
        <Route
          path="/api/teacher/courses"
          element={
            <Teacher
              content={
                <>
                  <Title>My courses</Title>
                  <Courses>
                    {courses.map((course) => (
                      <Course course={course} />
                    ))}
                  </Courses>
                </>
              }
            />
          }
        />
        <Route path="/api/teacher/calendar" element={<Calendar />} />
        <Route
          path="/api/teacher/settings"
          element={<Teacher content={<Settings />} />}
        />
        <Route
          path="/api/teacher/course/:courseId"
          element={<Teacher content={<CourseInfo />} />}
        />
        <Route
          path="/api/teacher/course/:courseId/lab"
          element={<Teacher content={<Lab />} />}
        />
      </Routes>
    </S.Wrapper>
  );
}

export default App;
