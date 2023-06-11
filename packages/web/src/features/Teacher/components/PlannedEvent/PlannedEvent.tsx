import React from 'react';
import * as S from './styled';
import { Schedule } from '@web-journal/libs';
import { getActivityColor } from 'packages/web/src/utils';

interface Props {
  plannedEvent: Schedule;
}

export const PlannedEvent = ({ plannedEvent }: Props) => {
  const [borderColor, backgroundColor] = getActivityColor(
    plannedEvent.lessonType
  );

  return (
    <S.Wrapper $backgroundColor={backgroundColor} $borderColor={borderColor}>
      <S.Day>{plannedEvent.startDate}</S.Day>
      <S.LessonName>{plannedEvent.name}</S.LessonName>
      <S.LessonNumber>{plannedEvent.lessonType}</S.LessonNumber>
    </S.Wrapper>
  );
};
