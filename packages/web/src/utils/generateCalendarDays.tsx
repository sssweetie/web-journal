import moment from 'moment';
import { Activity } from '../features/Calendar/components/Activity';
import { Day } from '../features/Calendar/components/Day';
import { BlankDay } from '../features/Calendar/styled';

export const generateCalendarDays = (
  currentDate: any,
  activities: Activity[]
) => {
  const firstDayOfMonth = () => {
    const firstDay = moment(currentDate).startOf('month').format('d');
    return parseInt(firstDay);
  };

  const daysInMonth = () => {
    return currentDate.daysInMonth();
  };

  const blanks = [];
  for (let i = 0; i < firstDayOfMonth(); i++) {
    blanks.push(<BlankDay key={`blank-${i}`} />);
  }

  const days = [];
  for (let i = 1; i <= daysInMonth(); i++) {
    const isCurrentDay = i === currentDate.date();

    const dayActivities: any = activities.filter((activity: any) =>
      moment(activity.date).isSame(moment(currentDate).date(i), 'day')
    );

    days.push(
      <Day today={isCurrentDay} key={`day-${i}`} activities={dayActivities}>
        {i}
      </Day>
    );
  }
  return [...blanks, ...days];
};
