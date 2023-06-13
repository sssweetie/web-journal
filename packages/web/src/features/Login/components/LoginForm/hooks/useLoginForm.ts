import { useState } from 'react';
import { User } from '@web-journal/libs';
import { useForm } from 'react-hook-form';
import { Action } from '../LoginForm';

export const useFormLogin = ({ login }: Action) => {
  const { register, handleSubmit } = useForm<User>();

  // Логика формы авторизации
  const onSubmit = async (data: User) => {
    try {
      await login(data);
    } catch (error) {
      console.error(error);
    }
  };
  return { register, handleSubmit: handleSubmit(onSubmit) };
};
