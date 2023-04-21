import React, { ReactNode } from 'react';
import { HeaderBar } from '../../../../components/HeaderBar';
import * as S from './styled';
import { useLocation } from 'react-router-dom';

interface Props {
  mainContent: ReactNode;
  navBar: ReactNode;
  courses: ReactNode;
  settings: ReactNode;
}

export const Layout = ({ mainContent, navBar, courses, settings }: Props) => {
  const location = useLocation();

  return (
    <>
      <HeaderBar />
      <S.Wrapper>
        {navBar}
        {
          {
            '/api/teacher/main': mainContent,
            '/api/teacher/courses': courses,
            '/api/teacher/settings': settings,
          }[location.pathname]
        }
      </S.Wrapper>
    </>
  );
};
