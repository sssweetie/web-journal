import styled from 'styled-components';
import profilePhoto from '../../../../assets/Teacher/profile.png';

export const ProfileNavigation = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 16.25rem;
  min-height: 36.375rem;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
  border-radius: 10px;
`;

export const ProfileInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const Avatar = styled.img.attrs(() => ({
  src: profilePhoto,
  alt: 'profile',
}))`
  max-width: 60px;
`;

export const FullName = styled.p`
  line-height: 21px;
  margin: 0;
  margin-top: 10px;
`;

export const Status = styled.p`
  font-size: 0.75rem;
  line-height: 16px;
  color: #9b9b9b;
  margin: 0;
`;

export const ExitDivider = styled.div`
  margin-top: 80%;
`;

export const NavigationMenu = styled.nav``;

export const Links = styled.ul``;
