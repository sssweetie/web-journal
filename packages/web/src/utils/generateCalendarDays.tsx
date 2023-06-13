import moment from 'moment';
import { Day } from '../features/Calendar/components/Day';
import { BlankDay } from '../features/Calendar/styled';
import { Schedule } from '@web-journal/libs';

// Генерация календаря
export const generateCalendarDays = (
  currentDate: any,
  activities: Schedule[],
  rescheduleActivity: (
    newActivity: Schedule,
    oldActivity: { id: string; currentDate: string }
  ) => Promise<void>
) => {
  // Первый день месяца
  const firstDayOfMonth = () => {
    const firstDay = moment(currentDate).startOf('month').format('d');
    return parseInt(firstDay);
  };
  // Количество дней в месяце
  const daysInMonth = () => {
    return currentDate.daysInMonth();
  };

  // Пустые дни, которые не относятся к месяцу
  const blanks = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(<BlankDay key={`blank-${i}`} />);
  }

  // Сами дни
  const days = [];
  for (let i = 1; i <= daysInMonth(); i++) {
    // CurrentDay - сегодняшний день необходимо обозначить
    const isCurrentDay =
      i === currentDate.date() && currentDate.isSame(moment(), 'month');
    // Отображение активностей
    const dayActivities: Schedule[] = activities.filter(
      (activity: Schedule) =>
        moment(activity.startDate).isSame(moment(currentDate).date(i), 'day') &&
        !activity.excludeDate.includes(
          moment(activity.startDate).format('MM.DD.YYYY')
        )
    );
    // UI отображение дней      
    days.push(
      <Day
        today={isCurrentDay}
        key={`day-${i}`}
        activities={dayActivities}
        rescheduleActivity={rescheduleActivity}
      >
        {i}
      </Day>
    );
  }
  return [...blanks, ...days];
};
