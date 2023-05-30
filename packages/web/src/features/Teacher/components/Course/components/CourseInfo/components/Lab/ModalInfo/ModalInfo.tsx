import React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Link from '@mui/material/Link';
import { TextField } from '@mui/material';
import * as S from './styled';
import { useNewModalForm } from './useNewModalForm';
import { modalInfoApi } from './modalInfoApi';
import { httpClient } from 'packages/web/src/features/services/httpClient';

interface Props {
  open: boolean;
  studentId: string;
  onClose: () => void;
}

export const ModalInfo: React.FC<Props> = ({ open, studentId, onClose }) => {
  const { register, handleSubmit } = useNewModalForm(
    modalInfoApi(httpClient),
    onClose,
    studentId
  );

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.Wrapper onSubmit={handleSubmit}>
        <span>
          Скачать работу:
          <Link href="#" underline="hover" download>
            Скачать
          </Link>
        </span>
        <p>
          <span>Комментарий: </span>Здравствуйте, прислал работу
        </p>
        <TextField
          {...register('mark', { required: true })}
          id="mark"
          label="Mark"
          type="number"
          required
        />
        <TextField
          {...register('comment', { maxLength: 250 })}
          id="outlined-multiline-flexible"
          label="Leave comment"
          multiline
          maxRows={4}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </S.Wrapper>
    </Modal>
  );
};
