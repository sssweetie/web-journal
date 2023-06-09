import React, { useState } from 'react';
import moment from 'moment';
import * as S from './styled';

import { Day } from './components/Day';
export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(moment());

  const weekdaysShort = moment.weekdaysShort();

  const firstDayOfMonth = () => {
    const firstDay = moment(currentDate).startOf('month').format('d');
    return parseInt(firstDay);
  };

  const daysInMonth = () => {
    return currentDate.daysInMonth();
  };

  const generateCalendarDays = () => {
    const blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blanks.push(<S.BlankDay key={`blank-${i}`} />);
    }

    const days = [];
    for (let i = 1; i <= daysInMonth(); i++) {
      const isCurrentDay = i === currentDate.date();
      days.push(
        <Day today={isCurrentDay} key={`day-${i}`}>
          {i}
        </Day>
      );
    }

    return [...blanks, ...days];
  };

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
      <S.CalendarBody>{generateCalendarDays()}</S.CalendarBody>
    </S.Calendar>
  );
};

// const activities: IActivity[] = [
//   {
//     cab: '301a',
//     date: new Date('December 17, 1995 03:24:00'),
//     name: 'Лабораторная работа 1',
//     backgroundColor: '#C5FFD2',
//     type: 'Лабораторная работа',
//   },
//   {
//     cab: '302a',
//     date: new Date('December 17, 1995 04:24:00'),
//     name: 'Лабораторная работа 2',
//     backgroundColor: '#C5FFD2',
//     type: 'Лабораторная работа',
//   },
//   {
//     cab: '301a',
//     date: new Date('December 17, 1995 05:24:00'),
//     name: 'Лабораторная работа 3',
//     backgroundColor: '#C5FFD2',
//     type: 'Лабораторная работа',
//   },
//   {
//     cab: '301a',
//     date: new Date('December 17, 1995 03:24:00'),
//     name: 'Лабораторная работа 1',
//     backgroundColor: '#C5FFD2',
//     type: 'Лабораторная работа',
//   },
//   {
//     cab: '302a',
//     date: new Date('December 17, 1995 04:24:00'),
//     name: 'Лабораторная работа 2',
//     backgroundColor: '#C5FFD2',
//     type: 'Лабораторная работа',
//   },
//   {
//     cab: '301a',
//     date: new Date('December 17, 1995 05:24:00'),
//     name: 'Лабораторная работа 3',
//     backgroundColor: '#C5FFD2',
//     type: 'Лабораторная работа',
//   },
//   {
//     cab: '301a',
//     date: new Date('December 17, 1995 03:24:00'),
//     name: 'Лабораторная работа 1',
//     backgroundColor: '#C5FFD2',
//     type: 'Лабораторная работа',
//   },
//   {
//     cab: '302a',
//     date: new Date('December 17, 1995 04:24:00'),
//     name: 'Лабораторная работа 2',
//     backgroundColor: '#C5FFD2',
//     type: 'Лабораторная работа',
//   },
//   {
//     cab: '301a',
//     date: new Date('December 17, 1995 05:24:00'),
//     name: 'Лабораторная работа 3',
//     backgroundColor: '#C5FFD2',
//     type: 'Лабораторная работа',
//   },
// ];

// export const Calendar = () => {
//   return <Day activities={activities} />;
// };
