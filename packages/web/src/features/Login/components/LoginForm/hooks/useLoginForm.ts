import { User } from '@web-journal/libs';
import { useForm } from 'react-hook-form';
import { Action } from '../LoginForm';

export const useFormLogin = ({ login, isLogged }: Action) => {
  const { control, handleSubmit } = useForm<User>();
  const onSubmit = async (data: User) => {
    await login(data);
  };
  return { control, handleSubmit: handleSubmit(onSubmit) };
};
