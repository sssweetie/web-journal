import React, { ReactNode } from 'react';
import * as S from './styled';
import { HeaderBar } from '../HeaderBar';
interface Props {
  loginForm: ReactNode;
}
export const Layout = ({ loginForm }: Props) => {
  return (
    <S.Wrapper>
      <HeaderBar></HeaderBar>
      {loginForm}
    </S.Wrapper>
  );
};
