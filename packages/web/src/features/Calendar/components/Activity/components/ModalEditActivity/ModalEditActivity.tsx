import React, { useState } from 'react';
import { InputAdornment, Modal } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as S from './styled';
import { Controller, useForm } from 'react-hook-form';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import {
  DatePicker,
  LocalizationProvider,
  TimeClock,
} from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment, { Moment } from 'moment';
import { Activity } from '../../Activity';

interface Props {
  open: boolean;
  onClose: () => void;
  activity: Activity;
}

export const ModalEditActivity = ({ open, onClose, activity }: Props) => {
  const [time, setTime] = useState<any>(moment());

  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
          <label>{activity.name}</label>
          <label>{activity.type}</label>
          <Controller
            control={control}
            name="cab"
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
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
        </S.Wrapper>
      </LocalizationProvider>
    </Modal>
  );
};
