import React, { useState } from 'react';
import { InputAdornment, Modal } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as S from './styled';
import { Controller, useForm } from 'react-hook-form';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import {
  DatePicker,
  LocalizationProvider,
  TimeClock,
} from '@mui/x-date-pickers';
import { Schedule } from '@web-journal/libs';

interface Props {
  open: boolean;
  onClose: () => void;
  activity: Schedule;
  rescheduleActivity: (
    newActivity: Schedule,
    oldActivity: { id: string; currentDate: string }
  ) => Promise<void>;
}

export const ModalEditActivity = ({
  open,
  onClose,
  activity,
  rescheduleActivity,
}: Props) => {
  const [time, setTime] = useState<any>(moment());

  const { control, handleSubmit } = useForm();

  // Перенос активности, когда форма подтверждается
  const onSubmit = async (data: any) => {
    const newActivity = {
      ...activity,
      cab: data.cab,
      startDate: data.date.format('MM.DD.YYYY'),
      startTime: data.time.format('HH:mm'),
      scheduleType: 'special',
    };

    await rescheduleActivity(newActivity, {
      id: String(activity._id),
      currentDate: activity.startDate,
    });

    onClose();
  };

  return (
    // Окно для переноса расписания на другой день или время
    <Modal open={open} onClose={onClose}>
      <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <label>{activity.name}</label>
          <label>{activity.lessonType}</label>
          <Controller
            control={control}
            name="cab"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                required
                defaultValue={activity.cab}
                label="Кабинет"
                {...field}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MyLocationIcon />
                    </InputAdornment>
                  ),
                }}
              >
                Кабинет
              </TextField>
            )}
          />
          <Controller
            control={control}
            name="date"
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <DatePicker
                defaultValue={moment()}
                onChange={onChange}
                label="Выберите дату"
              />
            )}
          />
          <label>{time.format('HH:mm')}</label>
          <Controller
            control={control}
            name="time"
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <TimeClock
                onChange={(newValue) => {
                  onChange(newValue);
                  setTime(newValue);
                }}
                ampm={false}
              />
            )}
          />
          <button type="submit">Submit</button>
        </LocalizationProvider>
      </S.Wrapper>
    </Modal>
  );
};
