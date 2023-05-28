import React from 'react';
import * as S from './styled';

interface PlannedEvent {
  name: string;
  lesson: string;
  date: string;
  backgroundColor: string;
}

interface Props {
  plannedEvent: PlannedEvent;
}

export const PlannedEvent = ({ plannedEvent }: Props) => {
  return (
    <S.Wrapper $backgroundColor={plannedEvent.backgroundColor}>
      <S.Day>{plannedEvent.date}</S.Day>
      <S.LessonName>{plannedEvent.name}</S.LessonName>
      <S.LessonNumber>{plannedEvent.lesson}</S.LessonNumber>
    </S.Wrapper>
  );
};
