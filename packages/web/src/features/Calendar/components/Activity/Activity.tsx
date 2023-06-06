import React from 'react';
import * as S from './styled';
import moment from 'moment';

export interface IActivity {
  cab: string;
  date: Date;
  name: string;
  type: string;
  backgroundColor: string;
}

interface Props {
  activity: IActivity;
}

export const Activity = ({ activity }: Props) => {
  return (
    <S.Wrapper
      $borderColor="#01BC11"
      $backgroundColor={activity.backgroundColor}
    >
      {moment(activity.date).format('LT')} - {activity.cab}
    </S.Wrapper>
  );
};
