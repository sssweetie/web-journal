import React, { useState } from 'react';
import moment from 'moment';
import * as S from './styled';
import { useCalendar } from './hooks/useCalendar';
import { calendarApi } from './api/calendarApi';
import { httpClient } from '../services/httpClient';
import { generateCalendarDays } from '../../utils';

export const Calendar = () => {
  const { activities } = useCalendar(calendarApi(httpClient));

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
      <S.CalendarHeader>
        <button onClick={prevMonth}>Previous</button>
        <S.YearMonth>{currentDate.format('MMMM YYYY')}</S.YearMonth>
        <button onClick={nextMonth}>Next</button>
      </S.CalendarHeader>
      <S.WeekDays>
        {weekdaysShort.map((weekday, index) => (
          <S.WeekDay key={index}>{weekday}</S.WeekDay>
        ))}
      </S.WeekDays>
      <S.CalendarBody>
        {generateCalendarDays(currentDate, activities)}
      </S.CalendarBody>
    </S.Calendar>
  );
};
