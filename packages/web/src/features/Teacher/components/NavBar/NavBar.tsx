import React from 'react';
import * as S from './styled';
import {
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material';

export const NavBar = () => {
  const listButtons = ['Main', 'Journal', 'Messages', 'Public', 'Settings'];
  return (
    <S.ProfileNavigation>
      <S.ProfileInfo>
        <S.Avatar />
        <S.FullName>Калачаров Николай</S.FullName>
        <S.Status>Преподаватель</S.Status>
      </S.ProfileInfo>
      <List>
        {listButtons.map((item) => (
          <ListItemButton sx={{ paddingTop: 0, paddingBottom: 0 }}>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
        {/* <S.ExitDivider>
          <Divider />
          <ListItemButton sx={{ marginTop: 0 }}>
            <ListItemText primary="Exit" />
          </ListItemButton>
        </S.ExitDivider> */}
      </List>
    </S.ProfileNavigation>
  );
};
