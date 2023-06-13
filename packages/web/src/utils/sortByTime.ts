import moment from 'moment';
import { Schedule } from '@web-journal/libs';

export const sortByTime = (activities: Schedule[]) => {
  // Сортировка активности по времени
  const activity = activities.sort((a, b) => {
    const timeA = moment(a.startTime, 'HH:mm');
    const timeB = moment(b.startTime, 'HH:mm');
    if (timeA.isBefore(timeB)) {
      return -1;
    }

    if (timeA.isAfter(timeB)) {
      return 1;
    }

    return 0;
  });
  return activity;
};
