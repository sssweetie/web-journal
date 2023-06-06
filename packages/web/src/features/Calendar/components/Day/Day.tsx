import React from 'react';
import * as S from './styled';
import { Activity } from '../Activity';
import { IActivity } from '../Activity/Activity';

interface Props {
  activities: IActivity[];
}

export const Day = ({ activities }: Props) => {
  return (
    <S.Wrapper>
      {activities.map((activity: IActivity, index: number) => {
        return index < 6 ? <Activity activity={activity} /> : null;
      })}
    </S.Wrapper>
  );
};
