import React, { useState } from 'react';
import { LoginApi } from '../loginApi';
import { User } from '@web-journal/libs';
import { useNavigate } from 'react-router-dom';

export const useLogin = (loginApi: LoginApi) => {
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const login = async (data: User) => {
    try {
      await loginApi.login(data);
      setIsLogged(true);
      navigate('/api/teacher/main');
    } catch (error) {
      console.error(error);
    }
  };

  return { login, isLogged };
};
