import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Link from '@mui/material/Link';
import { TextField } from '@mui/material';
import * as S from './styled';
import { useNewModalForm } from './useNewModalForm';
import { modalInfoApi } from './modalInfoApi';
import { httpClient } from 'packages/web/src/features/services/httpClient';

interface IHomework {
  comment: string;
  id: string;
  additional: string;
  mark: number;
}

interface Props {
  open: boolean;
  homework: IHomework;
  onClose: () => void;
  getStudents: () => Promise<any>;
}

export const ModalInfo: React.FC<Props> = ({
  open,
  homework,
  onClose,
  getStudents,
}) => {
  const { register, handleSubmit, setValue } = useNewModalForm(
    modalInfoApi(httpClient),
    onClose,
    homework.id,
    getStudents
  );

  useEffect(() => {
    if (open) {
      setValue('comment', homework.comment);
      setValue('mark', homework.mark);
    }
  }, [open]);

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
          <span>Комментарий: </span>
          {homework.additional}
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
