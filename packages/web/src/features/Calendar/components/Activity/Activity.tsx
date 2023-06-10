import React from 'react';
import * as S from './styled';
import { getActivityColor } from 'packages/web/src/utils';

export interface Activity {
  cab: string;
  startTime: string;
  name: string;
  type: string;
  date?: string;
  excludeDate: string[];
}

interface Props {
  activity: Activity;
}

export const Activity = ({ activity }: Props) => {
  const [borderColor, backgroundColor] = getActivityColor(activity.type);

  return (
    <S.Wrapper $borderColor={borderColor} $backgroundColor={backgroundColor}>
      {activity.startTime} - {activity.cab} - {activity.type}
    </S.Wrapper>
  );
};
