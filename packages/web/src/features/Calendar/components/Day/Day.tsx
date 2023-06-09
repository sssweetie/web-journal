import React from 'react';
import * as S from './styled';
import { Activity } from '../Activity';
import { IActivity } from '../Activity/Activity';

interface Props {
  activities?: IActivity[];
  children: number | string;
  today?: boolean;
}

export const Day = ({ activities, children, today }: Props) => {
  return (
    <S.Wrapper $today={today}>
      <S.DayNumber>{children}</S.DayNumber>
      <S.ActivitiesWrapper>
        {activities &&
          activities.map((activity: IActivity, index: number) => {
            return index < 6 ? <Activity activity={activity} /> : null;
          })}
      </S.ActivitiesWrapper>
    </S.Wrapper>
  );
};
