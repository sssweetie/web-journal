import { Button, FormControl, Input, InputLabel } from '@mui/material';
import * as S from './styled';
import { useTeacher } from '../../hooks/useTeacher';
import { teacherApi } from '../../teacherApi';
import { httpClient } from '../../../services/httpClient';
import { useForm } from 'react-hook-form';

export const Settings = () => {
  const { teacher } = useTeacher(teacherApi(httpClient));
  const { handleSubmit, register } = useForm({
    defaultValues: {
      name: teacher.name,
      mail: teacher.mail,
      link: teacher.link,
      telephone: '',
      sex: 'M',
      birthday: '',
    },
  });

  const onSubmit = (data: any) => {
  };

  return (
    <>
      <h3>Настройки</h3>
      <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormControl variant="standard" disabled>
          <InputLabel htmlFor="name">Ваше ФИО</InputLabel>
          <Input {...register('name')} id="name" />
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
        <Button variant="contained">Save</Button>
        <FormControl variant="standard" disabled>
          <InputLabel htmlFor="link">Ссылка</InputLabel>
          <Input {...register('link')} id="link" />
        </FormControl>
      </S.FormWrapper>
    </>
  );
};
