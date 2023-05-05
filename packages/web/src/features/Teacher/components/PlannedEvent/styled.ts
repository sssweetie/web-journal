import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border: 1px solid #0075ff;
  box-shadow: 0px 4px 10px rgba(238, 237, 238, 0.5);
  border-radius: 10px;
  background-color: #96c6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: translateY(-15px);
  }
`;

export const Day = styled.p`
  text-transform: uppercase;
  line-height: 21px;
  margin: 0;
`;

export const LessonName = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 16px;
  position: absolute;
  bottom: 34px;
`;

export const LessonNumber = styled.p`
  margin: 0;
  font-size: 0.75rem;
  line-height: 16px;
  position: absolute;
  bottom: 18px;
`;
