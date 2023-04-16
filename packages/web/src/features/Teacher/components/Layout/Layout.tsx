import React, { ReactNode } from 'react';
import { HeaderBar } from '../../../../components/HeaderBar';
import * as S from './styled';
import { useLocation } from 'react-router-dom';

interface Props {
  mainContent: ReactNode;
  navBar: ReactNode;
  courses: ReactNode;
}

export const Layout = ({ mainContent, navBar, courses }: Props) => {
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
          }[location.pathname]
        }
      </S.Wrapper>
    </>
  );
};
