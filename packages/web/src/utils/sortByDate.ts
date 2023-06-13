import moment from 'moment';
import { Schedule } from '@web-journal/libs';

export const sortByDate = (activities: Schedule[]) => {
  //Сортировка активности по дате 
  const activity = activities.sort((a, b) => {
    const dateA = moment(a.startDate, 'MM.DD.YYYY');
    const dateB = moment(b.startDate, 'MM.DD.YYYY');
    if (dateA.isBefore(dateB)) {
      return -1;
    }

    if (dateA.isAfter(dateB)) {
      return 1;
    }

    return 0;
  });
  return activity;
};
