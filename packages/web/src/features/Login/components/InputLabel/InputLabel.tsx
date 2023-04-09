import React, { PropsWithChildren, ReactNode } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input/Input';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';

interface Props {
  attachment: string;
  icon: ReactNode;
  register: any;
}

export const InputLabelIcon = ({
  attachment,
  icon,
  children,
  register,
}: PropsWithChildren<Props>) => {
  return (
    <FormControl sx={{ minWidth: '18.75rem', mt: '20px' }} variant="standard">
      <InputLabel htmlFor={attachment}>{children}</InputLabel>
      <Input
        {...register(attachment)}
        required={true}
        sx={{ minHeight: '2.5rem' }}
        id={attachment}
        startAdornment={
          <InputAdornment position="start">{icon}</InputAdornment>
        }
      />
    </FormControl>
  );
};
