import styled from 'styled-components';

export const Header = styled.header`
  width: 80%;
  min-width: 26rem;
  margin-top: 29px;
  height: 3.75rem;
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
`;

export const StudyP = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 0;
  font-weight: 700;
  color: #0075ff;
  padding: 1rem;
`;

export const LogoutButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  background-image: url('../../../../assets/Logout.svg');
  background-repeat: no-repeat;
  border: 0;
  background-position: center;
  border-radius: 50%;
  margin: 12px 14px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    opacity: 60%;
  }
`;
