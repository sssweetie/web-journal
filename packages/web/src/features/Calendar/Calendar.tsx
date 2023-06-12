import React, { useState } from 'react';
import moment from 'moment';
import * as S from './styled';
import { useCalendar } from './hooks/useCalendar';
import { calendarApi } from './api/calendarApi';
import { httpClient } from '../services/httpClient';
import { generateCalendarDays } from '../../utils';
import { SliderButtons } from '../../components/SliderButtons';
import { useNavigate, useParams } from 'react-router';

export const Calendar = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { activities, rescheduleActivity } = useCalendar(
    calendarApi(httpClient)
  );

  const [currentDate, setCurrentDate] = useState(moment());

  const weekdaysShort = moment.weekdaysShort();

  const prevMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, 'month'));
  };

  const nextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, 'month'));
  };

  return (
    <S.Calendar>
      <S.CalendarHeader
        onClick={() => navigate(`/api/teacher/${params.teacherId}/main`)}
      >
        {currentDate.format('MMMM YYYY')}
      </S.CalendarHeader>
      <SliderButtons
        leftButtonFunction={prevMonth}
        rightButtonFunction={nextMonth}
      />
      <S.WeekDays>
        {weekdaysShort.map((weekday, index) => (
          <S.WeekDay key={index}>{weekday}</S.WeekDay>
        ))}
      </S.WeekDays>
      <S.CalendarBody>
        {generateCalendarDays(currentDate, activities, rescheduleActivity)}
      </S.CalendarBody>
    </S.Calendar>
  );
};
