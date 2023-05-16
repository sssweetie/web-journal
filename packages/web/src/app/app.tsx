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
import { useApp } from './useApp';
import { appApi } from './appApi';
import { httpClient } from '../features/services/httpClient';

export function App() {
  const { courses } = useApp(appApi(httpClient));

  const plannedEvents = [
    { name: 'Utilization', date: 'MN 10:00', lesson: 'Lesson 6' },
    { name: 'Utilization', date: 'MN 10:00', lesson: 'Lesson 6' },
    { name: 'Utilization', date: 'MN 10:00', lesson: 'Lesson 6' },
    { name: 'Utilization', date: 'MN 10:00', lesson: 'Lesson 6' },
  ];

  return (
    <S.Wrapper>
      <Routes>
        <Route path="/api/login" element={<Login />} />
        <Route
          path="/api/teacher/main"
          element={
            <Teacher
              content={
                <MainContent courses={courses} plannedEvents={plannedEvents} />
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
                    {courses.map((course: any) => (
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
