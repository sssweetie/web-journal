import styled from 'styled-components';

export const Wrapper = styled.div<{ $today?: boolean }>`
  border: 1px solid #cccccc;
  padding: 8px;
  min-height: 150px;
  gap: 8px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  position: relative;
`;

export const DayNumber = styled.p<{ $today?: boolean }>`
  font-weight: 400;
  background-color: ${(props) => props.$today && '#eff0f5'};
  border-radius: 8px;
  padding: 4px 8px;
`;

export const ActivitiesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
