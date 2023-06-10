import React, { FormEvent } from 'react';
import * as S from './styled';
import PasswordIcon from '@mui/icons-material/Password';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { loginApi } from '../../loginApi';
import { httpClient } from '../../../services/httpClient';
import { useFormLogin } from './hooks/useLoginForm';
import { User } from '@web-journal/libs';
import { TextFieldControl } from 'packages/web/src/components/TextFieldControl';

export interface Action {
  login: (data: User) => Promise<void>;
  isLogged: boolean;
}

interface Props {
  action: Action;
}

export const LoginForm = ({ action }: Props) => {
  const { register, handleSubmit } = useFormLogin(action);

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormTitle>Log in</S.FormTitle>
      <TextFieldControl
        register={register}
        attachment="login"
        icon={<AccountCircle />}
      >
        Логин
      </TextFieldControl>
      <TextFieldControl
        register={register}
        attachment="password"
        icon={<PasswordIcon />}
      >
        Пароль
      </TextFieldControl>
      <S.LoginButton>Log in</S.LoginButton>
    </S.Form>
  );
};
