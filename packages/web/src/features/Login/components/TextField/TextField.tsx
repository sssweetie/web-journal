import React, { PropsWithChildren, ReactNode } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input/Input';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
import { Controller } from 'react-hook-form';

const INPUT_POSITION = 'start';
const MIN_HEIGHT = '2.5rem';
const MIN_WIDTH = '18.25rem';
const MARGIN_TOP = '20px';

interface Props {
  attachment: string;
  icon: ReactNode;
  control: any;
}

export const TextField = ({
  attachment,
  icon,
  children,
  control,
}: PropsWithChildren<Props>) => {
  return (
    <Controller
      control={control}
      name={attachment}
      render={({ field }) => (
        <FormControl sx={{ minWidth: MIN_WIDTH, mt: MARGIN_TOP }}>
          <InputLabel htmlFor={attachment}>{children}</InputLabel>
          <Input
            required={true}
            sx={{ minHeight: MIN_HEIGHT }}
            id={attachment}
            startAdornment={
              <InputAdornment position={INPUT_POSITION}>{icon}</InputAdornment>
            }
            {...field}
          />
        </FormControl>
      )}
    />
  );
};
