// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Login } from '../features/Login/Login';
import { Teacher } from '../features/Teacher/Teacher';
import styles from './app.module.css';
import * as S from './styled';

import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <S.Wrapper>
      <Routes>
        <Route path="/api/login" element={<Login />} />
        <Route path="/api/teacher/main" element={<Teacher />} />
      </Routes>

      {/* <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={<Link to="/page-2">Click here for page 2.</Link>}
        />
        <Route
          path="/page-2"
          element={<Link to="/">Click here to go back to root page.</Link>}
        />
      </Routes> */}
    </S.Wrapper>
  );
}

export default App;
