import React, { ReactNode } from 'react';
import { HeaderBar } from '../../../../components/HeaderBar';
import * as S from './styled';

interface Props {
  navBar: ReactNode;
  content: ReactNode;
}

export const Layout = ({ navBar, content }: Props) => {
  return (
    //UI отображение главной страницы
    <>
      <HeaderBar />
      <S.Wrapper>
        {navBar}
        <S.Content>{content}</S.Content>
      </S.Wrapper>
    </>
  );
};
