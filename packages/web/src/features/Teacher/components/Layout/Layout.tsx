import React, { ReactNode } from 'react';
import { HeaderBar } from '../../../../components/HeaderBar';
import * as S from './styled';

interface Props {
  mainContent: ReactNode;
  navBar: ReactNode;
}

export const Layout = ({ mainContent, navBar }: Props) => {
  return (
    <>
      <HeaderBar />
      <S.Wrapper>
        {navBar}
        {mainContent}
      </S.Wrapper>
    </>
  );
};
