import React from 'react';
import * as S from './styled';
import { Schedule } from '@web-journal/libs';
import { getActivityColor } from 'packages/web/src/utils';

interface Props {
  upcomingActivity: Schedule;
}

export const UpcomingActivity = ({ upcomingActivity }: Props) => {
  const [borderColor, backgroundColor] = getActivityColor(
    upcomingActivity.lessonType
  );

  return (
    <S.Wrapper $backgroundColor={backgroundColor} $borderColor={borderColor}>
      <S.Day>{upcomingActivity.startDate}</S.Day>
      <S.LessonName>{upcomingActivity.name}</S.LessonName>
      <S.LessonNumber>{upcomingActivity.lessonType}</S.LessonNumber>
    </S.Wrapper>
  );
};
