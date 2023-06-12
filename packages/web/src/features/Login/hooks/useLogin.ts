import React, { useState } from 'react';
import { User } from '@web-journal/libs';
import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';
import { useAppDispatch } from 'packages/web/src/store/hooks';
import { loginUser } from '../../../store/slices/userSlice';
export interface LoginApi {
  login: (data: User) => Promise<string>;
}

export const useLogin = (loginApi: LoginApi) => {
  const [serverError, setServerError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const login = async (data: User) => {
    try {
      const res = await loginApi.login(data);
      dispatch(loginUser({ id: res, isLogged: true }));
      navigate(`/api/teacher/${res}/main`);
    } catch (error) {
      if (isAxiosError(error)) {
        setServerError(error.response!.data.message);
      } else {
        console.error(error);
      }
    }
  };

  return { login, serverError };
};
