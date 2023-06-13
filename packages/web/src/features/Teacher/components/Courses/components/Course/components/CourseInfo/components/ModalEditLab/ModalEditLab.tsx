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
import { FileDB } from '@web-journal/libs';
import { text } from 'stream/consumers';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  labId: string;
  files: FileDB[];
}

export const ModalEditLab = ({ isOpen, onClose, labId, files }: Props) => {
  const { register, handleSubmit } = useForm();
  const { uploadDocument } = useModalLab(modalLabApi(httpClient));
  const location = useLocation();

  // Считывание загруженного файла, для отправки на сервер
  const onSubmit = async (data: any) => {
    const reader = new FileReader();
    reader.readAsText(data.file[0]);

    if (data.file[0].type !== 'text/plain') {
      alert('File format is not corrected');
    } else {
      reader.onload = async () => {
        const fileData = reader.result;
        await uploadDocument(
          { name: data.file[0].name, data: String(fileData) },
          labId,
          location.pathname.slice(4)
        );
      };
    }
  };

  return (
    // Модальное окно для редактирования информации о лабораторной работе
    <Modal open={isOpen} onClose={onClose}>
      <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
        <h1>Лабораторная работа 1</h1>
        <TextField
          {...register('description', { required: true })}
          label="Описание"
          required
        />
        <TextField
          {...register('maxMark', { required: true })}
          label="Максимальный балл"
          required
        />
        <S.FilesWrapper>
          {files.map((file: FileDB) => (
            <S.File>
              <a>{file.name}</a>
              <IconButton>
                <DeleteIcon fontSize="small" />
              </IconButton>
            </S.File>
          ))}
        </S.FilesWrapper>
        <S.DownloadArea>Загрузить файлы</S.DownloadArea>
        <input {...register('file')} type="file" />
        <Button variant="contained" type="submit">
          Подтвердить
        </Button>
      </S.Wrapper>
    </Modal>
  );
};
