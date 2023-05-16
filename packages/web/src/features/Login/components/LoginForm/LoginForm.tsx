import React, { FormEvent } from 'react';
import * as S from './styled';
import { TextField } from '../TextField';
import PasswordIcon from '@mui/icons-material/Password';
import AccountCircle from '@mui/icons-material/AccountCircle';
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
  const { control, handleSubmit } = useFormLogin(action);

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormTitle>Log in</S.FormTitle>
      <TextField
        control={control}
        icon={<AccountCircle />}
        attachment="login"
      >
        User
      </TextField>
      <TextField
        control={control}
        icon={<PasswordIcon />}
        attachment="password"
      >
        Password
      </TextField>
      <S.LoginButton>Log in</S.LoginButton>
    </S.Form>
  );
};
