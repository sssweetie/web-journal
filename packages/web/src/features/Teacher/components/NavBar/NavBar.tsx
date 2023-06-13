import React from 'react';
import * as S from './styled';
import { List, ListItemButton, ListItemText } from '@mui/material';

interface Props {
  settings: Array<string>;
  personalInfo: any;
  navigateHandler: (url: string) => void;
}

export const NavBar = ({ settings, personalInfo, navigateHandler }: Props) => {
  return (
    // Навигационная панель
    <S.ProfileNavigation>
      <S.ProfileInfo>
        <S.Avatar />
        <S.FullName>{personalInfo.teacher?.name}</S.FullName>
        <S.Status>Teacher</S.Status>
      </S.ProfileInfo>
      <List>
        {settings.map((item, index) => (
          <ListItemButton
            key={index}
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
