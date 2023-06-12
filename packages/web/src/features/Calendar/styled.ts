import styled from 'styled-components';

export const BlankDay = styled.div`
  border: 1px solid #cccccc;
  padding: 8px;
  gap: 4px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 50%;
`;

export const Calendar = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const CalendarHeader = styled.h1`
  display: flex;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
  align-items: center;
  justify-content: center;
  margin: 24px;

  cursor: pointer;
  &:hover {
    opacity: 60%;
  }
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-weight: bold;
`;

export const WeekDay = styled.p`
  font-weight: 400;
  flood-color: #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarBody = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  margin-top: 10px;
`;
