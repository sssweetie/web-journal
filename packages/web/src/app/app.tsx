// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Login } from '../features/Login/Login';
import { Teacher } from '../features/Teacher/Teacher';
import * as S from './styled';

import { Route, Routes } from 'react-router-dom';
import { Calendar } from '../features/Calendar';

export function App() {
  return (
    <S.Wrapper>
      <Routes>
        <Route path="/api/login" element={<Login />} />
        <Route path="/api/teacher/main" element={<Teacher />} />
        <Route path="/api/teacher/courses" element={<Teacher />} />
        <Route path="/api/teacher/calendar" element={<Calendar />} />
        <Route path="/api/teacher/settings" element={<Teacher />} />
      </Routes>
    </S.Wrapper>
  );
}

export default App;
