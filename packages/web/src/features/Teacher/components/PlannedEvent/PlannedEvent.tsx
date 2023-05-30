import React from 'react';
import * as S from './styled';
import { IPlannedEvent } from '@web-journal/libs';

interface Props {
  plannedEvent: IPlannedEvent;
}

export const PlannedEvent = ({ plannedEvent }: Props) => {
  return (
    <S.Wrapper $backgroundColor={plannedEvent.backgroundColor}>
      <S.Day>{plannedEvent.date}</S.Day>
      <S.LessonName>{plannedEvent.name}</S.LessonName>
      <S.LessonNumber>{plannedEvent.type}</S.LessonNumber>
    </S.Wrapper>
  );
};
