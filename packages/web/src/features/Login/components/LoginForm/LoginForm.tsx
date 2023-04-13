import React, { FormEvent } from 'react';
import * as S from './styled';
import { InputLabelIcon } from '../InputLabel';
import PasswordIcon from '@mui/icons-material/Password';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Checkbox } from '@mui/material';
import { loginApi } from '../../loginApi';
import { httpClient } from '../../../services/httpClient';
import { useFormLogin } from './hooks/useLoginForm';
import { User } from '@web-journal/libs';

export interface Action {
  login: (data: User) => Promise<void>;
  isLogged: boolean;
}

interface Props {
  action: Action;
}

export const LoginForm = ({ action }: Props) => {
  const agreement = `Я подтверждаю согласие на обработку 
  персональных данных в соответствии с условиями Политики 
  конфиденциальности , ознакомился и согласен с условиями 
  Пользовательского соглашения`;

  const { register, handleSubmit } = useFormLogin(action);

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormTitle>Log in</S.FormTitle>
      <InputLabelIcon
        register={register}
        icon={<AccountCircle />}
        attachment="login"
      >
        User
      </InputLabelIcon>
      <InputLabelIcon
        register={register}
        icon={<PasswordIcon />}
        attachment="password"
      >
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
