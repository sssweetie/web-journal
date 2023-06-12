// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Login } from '../features/Login/Login';
import { Teacher } from '../features/Teacher/Teacher';
import * as S from './styled';
import { Route, Routes } from 'react-router-dom';
import { Calendar } from '../features/Calendar';
import { MainContent } from '../features/Teacher/components/MainContent';
import { Title } from '../features/Teacher/components/MainContent/styled';
import { Settings } from '../features/Teacher/components/Settings';
import { Courses } from '../features/Teacher/components/Courses';
import { Lab } from '../features/Teacher/components/Courses/components/Course/components/CourseInfo/components/Lab';
import { CourseInfo } from '../features/Teacher/components/Courses/components/Course/components/CourseInfo';
import { useAppSelector } from '../store/hooks';

export function App() {
  const isLogged = useAppSelector((state) => state.user.isLogged);
  return (
    <S.Wrapper>
      <Routes>
        {isLogged ? (
          <>
            <Route
              path="/api/teacher/:teacherId/main"
              element={<Teacher content={<MainContent />} />}
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
            <Route
              path="/api/teacher/:teacherId/calendar"
              element={<Calendar />}
            />
            <Route
              path="/api/teacher/:teacherId/settings"
              element={<Teacher content={<Settings />} />}
            />
            <Route
              path="/api/teacher/:teacherId/course/:courseId"
              element={<Teacher content={<CourseInfo />} />}
            />
            <Route
              path="/api/teacher/:teacherId/course/:courseId/lab/:labId"
              element={<Teacher content={<Lab />} />}
            />
          </>
        ) : (
          <>
            <Route path="/api/login" element={<Login />} />
            <Route path="*" element={<h1>401</h1>} />
          </>
        )}
      </Routes>
    </S.Wrapper>
  );
}

export default App;
