import React from 'react';
import * as S from './styled';
import { List, ListItemButton, ListItemText } from '@mui/material';

interface PersonalInfo {
  name: string;
  status: string;
}

interface Props {
  settings: Array<string>;
  personalInfo: PersonalInfo;
}

export const NavBar = ({ settings, personalInfo }: Props) => {
  return (
    <S.ProfileNavigation>
      <S.ProfileInfo>
        <S.Avatar />
        <S.FullName>{personalInfo.name}</S.FullName>
        <S.Status>{personalInfo.status}</S.Status>
      </S.ProfileInfo>
      <List>
        {settings.map((item) => (
          <ListItemButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </S.ProfileNavigation>
  );
};
