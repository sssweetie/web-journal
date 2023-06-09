import moment from 'moment';
import { Activity } from '../features/Calendar/components/Activity';

export const sortByTime = (activities: Activity[]) => {
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
