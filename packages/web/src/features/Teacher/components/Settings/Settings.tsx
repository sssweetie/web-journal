import { Button, FormControl, Input, InputLabel } from '@mui/material';
import * as S from './styled';
import { useTeacher } from '../../hooks/useTeacher';
import { teacherApi } from '../../teacherApi';
import { httpClient } from '../../../services/httpClient';
import { useForm } from 'react-hook-form';

export const Settings = () => {
  const { teacher } = useTeacher(teacherApi(httpClient));
  const { handleSubmit, register, setValue } = useForm();

  const onSubmit = (data: any) => {
    console.log('123');
  };

  return (
    // Список настроек
    <>
      <h3>Настройки</h3>
      <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormControl variant="standard" disabled>
          <InputLabel htmlFor="firstName">Имя</InputLabel>
          <Input {...register('firstName')} id="firstName" />
        </FormControl>
        <FormControl variant="standard" disabled>
          <InputLabel htmlFor="lastName">Фамилия</InputLabel>
          <Input {...register('lastName')} id="lastName" />
        </FormControl>
        <FormControl variant="standard" disabled>
          <InputLabel htmlFor="surname">Отчество</InputLabel>
          <Input {...register('surname')} id="surname" />
        </FormControl>
        <FormControl variant="standard" disabled>
          <InputLabel htmlFor="sex">Пол</InputLabel>
          <Input {...register('sex')} id="sex" />
        </FormControl>
        <FormControl variant="standard" disabled>
          <InputLabel htmlFor="birthday">Дата рождения</InputLabel>
          <Input {...register('birthday')} id="birthday" />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="telephone">Телефон</InputLabel>
          <Input {...register('telephone')} id="telephone" />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="mail">Почта</InputLabel>
          <Input {...register('mail')} id="mail" />
        </FormControl>
        <FormControl variant="standard" disabled>
          <InputLabel htmlFor="link">Ссылка</InputLabel>
          <Input {...register('link')} id="link" />
        </FormControl>
      </S.FormWrapper>
      <Button style={{ width: '270px', marginTop: '20px' }} variant="contained">
        Save
      </Button>
    </>
  );
};
