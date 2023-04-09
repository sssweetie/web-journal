// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Login } from '../features/Login/Login';
import styles from './app.module.css';

import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/api/login" element={<Login />} />
        <Route path="/success" element={<div>hello</div>} />
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
    </>
  );
}

export default App;
