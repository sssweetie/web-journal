import React from 'react';
import * as S from './styled';
import { Activity } from '../Activity';
import { sortByTime } from 'packages/web/src/utils';
interface Props {
  activities?: Activity[];
  children: number | string;
  today?: boolean;
}

export const Day = ({ activities, children, today }: Props) => {
  return (
    <S.Wrapper $today={today}>
      <S.DayNumber>{children}</S.DayNumber>
      <S.ActivitiesWrapper>
        {activities &&
          sortByTime(activities).map((activity: Activity, index: number) => {
            return index < 6 ? <Activity activity={activity} /> : null;
          })}
      </S.ActivitiesWrapper>
    </S.Wrapper>
  );
};
