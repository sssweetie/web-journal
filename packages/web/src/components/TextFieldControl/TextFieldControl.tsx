import React, { PropsWithChildren, ReactNode } from 'react';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import TextField from '@mui/material/TextField';

interface Props {
  attachment: string;
  icon: ReactNode;
  children: any;
  register: any;
  hidden?: boolean;
}

export const TextFieldControl = ({
  attachment,
  icon,
  register,
  children,
  hidden,
}: PropsWithChildren<Props>) => {
  return (
    <TextField
      sx={{ width: '95%' }}
      {...register(attachment)}
      label={children}
      required={true}
      type={hidden ? 'password' : 'text'}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
    />
  );
};
