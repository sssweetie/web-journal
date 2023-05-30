import React, { useState } from 'react';
import * as S from './styled';
import { SliderButtons } from '../../components/SliderButtons';
import { Link, useParams } from 'react-router-dom';

export const Calendar = () => {
  
  const params = useParams();

  const monthsName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  
  const daysName = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const [activeDay, setActiveDay] = useState(new Date());
  const year = activeDay.getFullYear();
  const month = activeDay.getMonth();
  const firstDay = new Date(year, month, 1).getDay(); //получили какой день недели у первого числа месяца

  const generateCalendar = () => {
    const calendar: Array<Array<number | string>> = [];
    calendar[0] = daysName; //Первая строка - месяца
    let maxDays = daysInMonths[month]; //Получаем месяц и сколько в нём дней
    if (month === 1) {
      //Если это февраль, то учитывая високосный год
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        maxDays += 1;
      }
    }
    let counter = 1;
    for (let row = 1; row < 7; row++) {
      calendar[row] = []; //создаём пустой массив недели
      for (let col = 0; col < 7; col++) {
        calendar[row][col] = -1; //сразу задаём -1 для тех значений, который не входят в месяц
        if (row === 1 && col >= firstDay - 1) {
          //если неделя первая, а колонка равна первому дню, то можно начинать отсчёт дней
          calendar[row][col] = counter++;
        } else if (row > 1 && counter <= maxDays) {
          //или если неделя не первая, но мы не дошли до последнего дня, то увеличиваем дни
          calendar[row][col] = counter++;
        }
      }
    }
    return calendar;
  };

  const getPreviousNextMonth = (n: number) => {
    setActiveDay((prevState) => {
      const newDate = new Date();
      newDate.setMonth(prevState.getMonth() + n);
      return newDate;
    });
  };

  return (
    <S.Wrapper>
      <S.CurrentMonth>
        <Link to={`/api/teacher/${params.teacherId}/main`}>
          {monthsName[month]}
        </Link>
        <SliderButtons
          leftButtonFunction={getPreviousNextMonth}
          rightButtonFunction={getPreviousNextMonth}
          leftButtonArg={-1}
          rightButtonArg={1}
        />
      </S.CurrentMonth>

      {generateCalendar().map((rowArray, rowIndex) => (
        <S.Week>
          {rowArray.map((day, index) => {
            if (rowIndex === 0) {
              return <S.FirstDays key={index}>{day}</S.FirstDays>;
            } else if (
              day === Number(activeDay.toString().split(' ')[2]) &&
              activeDay.getMonth() === new Date().getMonth()
            ) {
              return <S.TodayDay key={index}>{day}</S.TodayDay>;
            } else {
              return day !== -1 ? (
                <S.Day key={index}>{day}</S.Day>
              ) : (
                <div></div>
              );
            }
          })}
        </S.Week>
      ))}
    </S.Wrapper>
  );
};
