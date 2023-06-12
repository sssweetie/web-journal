import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
  height: auto;
  border: 1px solid black;
  box-shadow: 24px;
  background-color: #ffffff;
  padding: 24px;
  gap: 16px;
`;

export const DownloadArea = styled.div`
  border: 1px dashed black;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
`;

export const File = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
