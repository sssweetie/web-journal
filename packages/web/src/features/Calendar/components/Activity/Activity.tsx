import React, { useState } from 'react';
import * as S from './styled';
import { getActivityColor } from 'packages/web/src/utils';
import { ModalEditActivity } from './components/ModalEditActivity';
import { Schedule } from '@web-journal/libs';

interface Props {
  activity: Schedule;
  rescheduleActivity: (
    newActivity: Schedule,
    oldActivity: { id: string; currentDate: string }
  ) => Promise<void>;
}

export const Activity = ({ activity, rescheduleActivity }: Props) => {
  const [borderColor, backgroundColor] = getActivityColor(activity.lessonType);
  const [isOpen, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const onClick = () => {
    setOpen(true);
  };

  return (
    <>
      <S.Wrapper
        $borderColor={borderColor}
        $backgroundColor={backgroundColor}
        onClick={onClick}
      >
        {activity.startTime} - {activity.cab} - {activity.lessonType}
      </S.Wrapper>
      <ModalEditActivity
        open={isOpen}
        onClose={onClose}
        activity={activity}
        rescheduleActivity={rescheduleActivity}
      />
    </>
  );
};
