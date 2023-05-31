import React from 'react';
import Modal from '@mui/material/Modal';
import * as S from './styled';
import { Button, IconButton, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalEditLab = ({ isOpen, onClose }: Props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log('123');
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
        <h1>Лабораторная работа 1</h1>
        <TextField
          {...register('description', { required: true })}
          label="Описание"
        />
        <TextField
          {...register('maxMark', { required: true })}
          label="Максимальный балл"
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <a
            style={{ alignSelf: 'center' }}
            href="Лабораторная работа 1"
            download=""
          >
            Лабораторная работа 1
          </a>
          <IconButton>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
        <S.DownloadArea>Загрузить файлы</S.DownloadArea>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined">Распечатать ведомость</Button>
          <Button variant="outlined">Получить статистику</Button>
        </div>

        <Button variant="contained">Подтвердить</Button>
      </S.Wrapper>
    </Modal>
  );
};
