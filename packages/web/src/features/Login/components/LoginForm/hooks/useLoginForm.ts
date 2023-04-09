import { User } from '@web-journal/libs';
import { useForm } from 'react-hook-form';
import { Action } from '../LoginForm';

export const useFormLogin = ({ login, isLogged }: Action) => {
  const { register, handleSubmit } = useForm<User>();
  const onSubmit = async (data: User) => {
    await login(data);
  };
  return { register, handleSubmit: handleSubmit(onSubmit) };
};
