import { Button, FormControl, Input, InputLabel } from '@mui/material';
import React from 'react';
import * as S from './styled';

export const Settings = () => {
  return (
    <S.PageWrapper>
      <h3>Настройки</h3>
      <S.FormWrapper>
        <FormControl variant="standard" disabled>
          <InputLabel htmlFor="person-name">Ваше имя</InputLabel>
          <Input defaultValue=" " id="person-name"></Input>
        </FormControl>
        <FormControl variant="standard" disabled>
          <InputLabel htmlFor="sex">Пол</InputLabel>
          <Input defaultValue=" " id="sex"></Input>
        </FormControl>
        <FormControl variant="standard" disabled>
          <InputLabel htmlFor="secondName">Фамилия</InputLabel>
          <Input defaultValue=" " id="secondName"></Input>
        </FormControl>
        <FormControl variant="standard" disabled>
          <InputLabel htmlFor="birthday">Дата рождения</InputLabel>
          <Input defaultValue=" " id="birthday"></Input>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="telephone">Телефон</InputLabel>
          <Input defaultValue=" " id="telephone"></Input>
        </FormControl>
        <Button variant="contained">Save</Button>
        <FormControl variant="standard">
          <InputLabel htmlFor="mail">Почта</InputLabel>
          <Input defaultValue=" " id="mail"></Input>
        </FormControl>
      </S.FormWrapper>
    </S.PageWrapper>
  );
};
