import { Schedule } from '@web-journal/libs';
import moment from 'moment';

export const generateActivities = (lessons: Schedule[]) => {
  const activities: any = [];

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
        });
        currentDate.add(2, 'week');
      }
    }
  });
  console.log(activities);
  return activities;
};
