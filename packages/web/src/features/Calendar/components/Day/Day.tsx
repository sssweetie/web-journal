import React from 'react';
import * as S from './styled';
import { Activity } from '../Activity';
import { sortByTime } from 'packages/web/src/utils';
import { Schedule } from '@web-journal/libs';
interface Props {
  activities?: Schedule[];
  children: number | string;
  today?: boolean;
  rescheduleActivity: (
    newActivity: Schedule,
    oldActivity: { id: string; currentDate: string }
  ) => Promise<void>;
}

export const Day = ({
  activities,
  children,
  today,
  rescheduleActivity,
}: Props) => {
  return (
    // День в календаре
    <S.Wrapper>
      <S.DayNumber $today={today}>{children}</S.DayNumber>
      <S.ActivitiesWrapper>
        {activities &&
          sortByTime(activities).map((activity: Schedule, index: number) => {
            return index < 6 ? (
              <Activity // Отображение первых 6-ти активностей
                activity={activity}
                rescheduleActivity={rescheduleActivity}
              />
            ) : null;
          })}
      </S.ActivitiesWrapper>
    </S.Wrapper>
  );
};
