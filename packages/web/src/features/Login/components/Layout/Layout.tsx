import React, { ReactNode } from 'react';
import * as S from './styled';
import { HeaderBar } from '../../../../components/HeaderBar';
interface Props {
  loginForm: ReactNode;
}
export const Layout = ({ loginForm }: Props) => {
  return (
    // UI формы авторизации
    <>
      <HeaderBar></HeaderBar>
      {loginForm}
    </>
  );
};
