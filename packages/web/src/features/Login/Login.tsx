import React from 'react';
import { Layout } from './components/Layout';
import { LoginForm } from './components/LoginForm';
import { useLogin } from './hooks/useLogin';
import { httpClient } from '../services/httpClient';
import { loginApi } from './loginApi';
export const Login = () => {
  const { login, isLogged } = useLogin(loginApi(httpClient));

  return <Layout loginForm={<LoginForm action={{ login, isLogged }} />} />;
};
