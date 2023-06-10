import React, { useState } from 'react';
import * as S from './styled';
import { getActivityColor } from 'packages/web/src/utils';
import { Modal } from '@mui/material';
import { ModalEditActivity } from './components/ModalEditActivity';

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
        {activity.startTime} - {activity.cab} - {activity.type}
      </S.Wrapper>
      <ModalEditActivity open={isOpen} onClose={onClose} activity={activity} />
    </>
  );
};
