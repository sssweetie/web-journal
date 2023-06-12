import React, { useState } from 'react';
import { User } from '@web-journal/libs';
import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';

export interface LoginApi {
  login: (data: User) => Promise<void>;
}

export const useLogin = (loginApi: LoginApi) => {
  const [isLogged, setIsLogged] = useState(false);
  const [serverError, setServerError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const login = async (data: User) => {
    try {
      const res = await loginApi.login(data);
      setIsLogged(true);
      // navigate('/api/teacher/main');
    } catch (error) {
      if (isAxiosError(error)) {
        setServerError(error.response!.data.message);
      } else {
        console.error(error);
      }
    }
  };

  return { login, isLogged, serverError };
};
