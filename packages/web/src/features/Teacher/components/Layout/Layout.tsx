import React from 'react';
import { HeaderBar } from '../../../../components/HeaderBar';
import * as S from './styled';
import { NavBar } from '../NavBar';
import { MainContent } from '../MainContent';

export const Layout = () => {
  return (
    <>
      <HeaderBar />
      <S.Wrapper>
        <NavBar />
        <MainContent />
      </S.Wrapper>
    </>
  );
};
