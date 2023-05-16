import React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Link from '@mui/material/Link';
import { TextField } from '@mui/material';
import * as S from './styled';
import { useForm } from 'react-hook-form';

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ModalInfo: React.FC<Props> = ({ open, onClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    onClose();
    console.log(data);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
        <span>
          Download work:
          <Link href="#" underline="hover" download>
            download
          </Link>
        </span>
        <p>
          <span>Comment: </span>Здравствуйте, прислал работу
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
