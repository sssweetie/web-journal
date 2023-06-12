import React from 'react';
import Modal from '@mui/material/Modal';
import * as S from './styled';
import { Button, IconButton, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete';
import { useModalLab } from './hooks/useModalLab';
import { modalLabApi } from './api/modalLabApi';
import { httpClient } from 'packages/web/src/features/services/httpClient';
import { useLocation } from 'react-router-dom';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  labId: string;
}

export const ModalEditLab = ({ isOpen, onClose, labId }: Props) => {
  const { register, handleSubmit } = useForm();
  const { uploadDocument } = useModalLab(modalLabApi(httpClient));
  const location = useLocation();

  const onSubmit = async (data: any) => {
    const reader = new FileReader();
    reader.readAsText(data.file[0]);
    reader.onload = async () => {
      const fileData = reader.result;
      await uploadDocument(
        { name: data.file[0].name, data: String(fileData) },
        labId,
        location.pathname.slice(4)
      );
    };
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
          <a></a>
          {/* <a
            style={{ alignSelf: 'center' }}
            href="Лабораторная работа 1"
            download=""
          >
            Лабораторная работа 1
          </a> */}
          <IconButton>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
        <S.DownloadArea>Загрузить файлы</S.DownloadArea>
        <input {...register('file')} type="file" />
        <Button variant="contained" type="submit">
          Подтвердить
        </Button>
      </S.Wrapper>
    </Modal>
  );
};
