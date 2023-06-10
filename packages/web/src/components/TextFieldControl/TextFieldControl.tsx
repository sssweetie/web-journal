import React, { PropsWithChildren, ReactNode } from 'react';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import TextField from '@mui/material/TextField';

interface Props {
  attachment: string;
  icon: ReactNode;
  children: any;
  register: any;
}

export const TextFieldControl = ({
  attachment,
  icon,
  register,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <TextField
      {...register(attachment, { required: true })}
      label={children}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
    />
  );
};
