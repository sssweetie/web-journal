import styled from 'styled-components';

export const Wrapper = styled.div<{ $today?: boolean }>`
  width: 130px;
  height: 130px;
  border: 1px solid #cccccc;
  padding: 8px;
  gap: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  margin-top: 5px;
  position: relative;
  border: ${(props) => props.$today && '1px dashed #6699ff'};
`;

export const DayNumber = styled.p`
  font-weight: 400;
`;

export const ActivitiesWrapper = styled.div``;
