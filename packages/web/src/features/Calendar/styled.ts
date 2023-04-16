import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  font-weight: 700;
`;

export const CurrentMonth = styled.header`
  display: flex;
  font-size: 1.5rem;
  height: 3rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Day = styled.div`
  padding: 10px;
  background-color: #96c6ff;
  width: 130px;
  height: 130px;
  margin-top: 5px;
`;

export const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 150px);
  grid-auto-flow: rows;
  grid-column-gap: 5px;
`;

export const FirstDays = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  margin-top: 10px;
  background-color: #feae3a;
  opacity: 80%;
`;

export const TodayDay = styled.div`
  padding: 10px;
  background-color: #fe71c6;
  width: 130px;
  height: 130px;
  margin-top: 5px;
  opacity: 80%;
`;
