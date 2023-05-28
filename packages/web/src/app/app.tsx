// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Login } from '../features/Login/Login';
import { Teacher } from '../features/Teacher/Teacher';
import * as S from './styled';
import { Route, Routes } from 'react-router-dom';
import { Calendar } from '../features/Calendar';
import { CourseInfo } from '../features/Teacher/components/Course/components/CourseInfo';
import { MainContent } from '../features/Teacher/components/MainContent';
import { Lab } from '../features/Teacher/components/Course/components/CourseInfo/components/Lab';
import { Title } from '../features/Teacher/components/MainContent/styled';
import { Settings } from '../features/Teacher/components/Settings';
import { Courses } from '../features/Teacher/components/Courses';

export function App() {
  const plannedEvents = [
    {
      name: 'Заседание кафедры',
      date: 'ПН 14:00',
      lesson: '-',
      backgroundColor: '#99FF99',
    },
    {
      name: 'Семинар',
      date: 'ВТ 16:00',
      lesson: 'Урок 6: XXX ',
      backgroundColor: '#FFFF99',
    },
    {
      name: 'Лекция',
      date: 'ВТ 10:00',
      lesson: 'Урок 3: YYY',
      backgroundColor: '#FFCCFF',
    },
    {
      name: 'Лабораторная работа',
      date: 'ВТ 12:00',
      lesson: 'Урок 1: ZZZ',
      backgroundColor: '#CCFFFF',
    },
  ];

  return (
    <S.Wrapper>
      <Routes>
        <Route path="/api/login" element={<Login />} />
        <Route
          path="/api/teacher/:teacherId/main"
          element={
            <Teacher content={<MainContent plannedEvents={plannedEvents} />} />
          }
        />
        <Route
          path="/api/teacher/:teacherId/courses"
          element={
            <Teacher
              content={
                <>
                  <Title>My courses</Title>
                  <Courses />
                </>
              }
            />
          }
        />
        <Route path="/api/teacher/:teacherId/calendar" element={<Calendar />} />
        <Route
          path="/api/teacher/:teacherId/settings"
          element={<Teacher content={<Settings />} />}
        />
        <Route
          path="/api/teacher/:teacherId/course/:courseId/:groupID"
          element={<Teacher content={<CourseInfo />} />}
        />
        <Route
          path="/api/teacher/:teacherId/course/:courseId/:groupID/lab/:labID"
          element={<Teacher content={<Lab />} />}
        />
      </Routes>
    </S.Wrapper>
  );
}

export default App;
