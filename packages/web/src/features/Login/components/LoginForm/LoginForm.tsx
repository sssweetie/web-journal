import React, { FormEvent } from 'react';
import * as S from './styled';
import { InputLabelIcon } from '../InputLabel';
import PasswordIcon from '@mui/icons-material/Password';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export const LoginForm = () => {
  const handlerSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const agreement = `Я подтверждаю согласие на обработку 
  персональных данных в соответствии с условиями Политики 
  конфиденциальности , ознакомился и согласен с условиями 
  Пользовательского соглашения`;

  return (
    <S.Form onSubmit={(e) => handlerSubmit(e)}>
      <S.FormTitle>Log in</S.FormTitle>
      <InputLabelIcon icon={<AccountCircle />} attachment="login-input">
        User
      </InputLabelIcon>
      <InputLabelIcon icon={<PasswordIcon />} attachment="password-input">
        Password
      </InputLabelIcon>
      <S.LoginButton>Log in</S.LoginButton>
      <S.AgreementWrapper>
        <Checkbox />
        <S.AgreementP>{agreement}</S.AgreementP>
      </S.AgreementWrapper>
    </S.Form>
  );
};
