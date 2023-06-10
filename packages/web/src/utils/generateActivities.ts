import { Schedule } from '@web-journal/libs';
import moment from 'moment';
import { Activity } from '../features/Calendar/components/Activity';

export const generateActivities = (lessons: Schedule[]) => {
  const activities: Activity[] = [];

  lessons.forEach((lesson: Schedule) => {
    const currentDate = moment(lesson.startDate);

    if (lesson.scheduleType === 'weekly') {
      while (currentDate.isSameOrBefore(moment(), 'day')) {
        activities.push({
          date: currentDate.format('YYYY-MM-DD'),
          startTime: lesson.startTime,
          name: lesson.name,
          type: lesson.lessonType,
          cab: lesson.cab,
          excludeDate: lesson.excludeDate,
        });
        currentDate.add(1, 'week');
      }
    } else if (lesson.scheduleType === 'twoWeekly') {
      while (currentDate.isSameOrBefore(moment(), 'day')) {
        activities.push({
          date: currentDate.format('YYYY-MM-DD'),
          startTime: lesson.startTime,
          name: lesson.name,
          type: lesson.lessonType,
          cab: lesson.cab,
          excludeDate: lesson.excludeDate,
        });
        currentDate.add(2, 'week');
      }
    }
  });
  console.log(activities);
  return activities;
};
