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
  navigateHandler: (url: string) => void;
}

export const NavBar = ({ settings, personalInfo, navigateHandler }: Props) => {
  return (
    <S.ProfileNavigation>
      <S.ProfileInfo>
        <S.Avatar />
        <S.FullName>{personalInfo.name}</S.FullName>
        <S.Status>{personalInfo.status}</S.Status>
      </S.ProfileInfo>
      <List>
        {settings.map((item) => (
          <ListItemButton
            onClick={() => navigateHandler(item)}
            sx={{ paddingTop: 0, paddingBottom: 0 }}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </S.ProfileNavigation>
  );
};
