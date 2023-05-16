import React, { ReactNode } from 'react';
import { HeaderBar } from '../../../../components/HeaderBar';
import * as S from './styled';
import { useLocation } from 'react-router-dom';

interface Props {
  mainContent: ReactNode;
  navBar: ReactNode;
  courses: ReactNode;
  settings: ReactNode;
  courseInfo: ReactNode;
}

export const Layout = ({
  mainContent,
  navBar,
  courses,
  settings,
  courseInfo,
  lab,
}: Props) => {
  const location = useLocation();

  return (
    <>
      <HeaderBar />
      <S.Wrapper>
        {navBar}
        <S.Test>
          {
            {
              '/api/teacher/main': mainContent,
              '/api/teacher/courses': courses,
              '/api/teacher/settings': settings,
              '/api/teacher/course': courseInfo,
              '/api/teacher/course/lab': lab,
            }[location.pathname]
          }
        </S.Test>
      </S.Wrapper>
    </>
  );
};
