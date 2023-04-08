// import React from 'react';
// import * as S from './styled';

// interface Props {
//   attachment: string;
//   textContent: string;
// }

// export const InputLabel = ({ attachment, textContent }: Props) => {
//   return (
//     <>
//       <S.InputLabel htmlFor={attachment}>{textContent}</S.InputLabel>
//       <S.Input id={attachment}></S.Input>
//     </>
//   );
// };

import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input/Input';
import InputAdornment from '@mui/material/InputAdornment/InputAdornment';
// import AccountCircle from '@mui/icons-material/AccountCircle';

export const InputLabelIcon = () => {
  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="input-with-icon-adornment">
        With a start adornment
      </InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            {/* <AccountCircle /> */}
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
