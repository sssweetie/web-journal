import styled from 'styled-components';

export const BlankDay = styled.div`
  width: 130px;
  height: 130px;
  border: 1px solid #cccccc;
  padding: 8px;
  gap: 4px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  opacity: 50%;
`;

export const Calendar = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const YearMonth = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
  margin: 0;
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
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
`;
