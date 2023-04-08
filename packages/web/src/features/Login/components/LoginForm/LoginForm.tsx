import React from 'react';
import * as S from './styled';
import { InputLabelIcon } from '../InputLabel';
export const LoginForm = () => {
  return (
    <S.Form>
      <S.FormTitle>Авторизация</S.FormTitle>
      <InputLabelIcon></InputLabelIcon>
      {/* <InputLabel attachment="loginInput" textContent="Login" />
      <InputLabel attachment="passwordInput" textContent="Password" /> */}
    </S.Form>
  );
};
