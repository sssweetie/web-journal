import styled from 'styled-components';

export const Wrapper = styled.div<{
  $backgroundColor: string;
  $borderColor: string;
}>`
  border-radius: 12px;
  width: 80%;
  font-size: 12px;
  padding: 2px;
  text-align: center;

  &:hover {
    opacity: 60%;
    cursor: pointer;
  }

  border: 1px solid ${(props) => props.$borderColor};
  background-color: ${(props) => props.$backgroundColor};
`;
