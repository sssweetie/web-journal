import React, { ReactNode } from 'react';
import { HeaderBar } from '../../../../components/HeaderBar';
import * as S from './styled';

interface Props {
  navBar: ReactNode;
  content: ReactNode;
}

export const Layout = ({ navBar, content }: Props) => {
  return (
    <>
      <HeaderBar />
      <S.Wrapper>
        {navBar}
        <S.Content>{content}</S.Content>
      </S.Wrapper>
    </>
  );
};
