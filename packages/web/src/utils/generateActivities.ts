import { Schedule } from '@web-journal/libs';
import moment from 'moment';

// Генерация активностей для дня
export const generateActivities = (lessons: Schedule[]) => {
  const activities: Schedule[] = [];

  lessons.forEach((lesson: Schedule) => {
    const currentDate = moment(lesson.startDate);

    // Каждую неделю повторяется активность
    if (lesson.scheduleType === 'weekly') {
      while (currentDate.isSameOrBefore(moment(lesson.endDate))) {
        activities.push({
          _id: lesson._id,
          groupId: lesson.groupId,
          teacherId: lesson.teacherId,
          startDate: currentDate.format('MM.DD.YYYY'),
          startTime: lesson.startTime,
          name: lesson.name,
          lessonType: lesson.lessonType,
          cab: lesson.cab,
          excludeDate: lesson.excludeDate,
          scheduleType: lesson.scheduleType,
          endDate: lesson.endDate,
        });
        currentDate.add(1, 'week');
      }

      // Каждые две недели повторяется активность
    } else if (lesson.scheduleType === 'twoWeekly') {
      while (currentDate.isSameOrBefore(moment(lesson.endDate))) {
        activities.push({
          _id: lesson._id,
          groupId: lesson.groupId,
          teacherId: lesson.teacherId,
          startDate: currentDate.format('MM.DD.YYYY'),
          startTime: lesson.startTime,
          name: lesson.name,
          lessonType: lesson.lessonType,
          cab: lesson.cab,
          excludeDate: lesson.excludeDate,
          scheduleType: lesson.scheduleType,
          endDate: lesson.endDate,
        });
        currentDate.add(2, 'week');
      }

      // Активность выводится в один единственный день
    } else if (lesson.scheduleType === 'special') {
      activities.push({
        _id: lesson._id,
        groupId: lesson.groupId,
        teacherId: lesson.teacherId,
        startDate: currentDate.format('MM.DD.YYYY'),
        startTime: lesson.startTime,
        name: lesson.name,
        lessonType: lesson.lessonType,
        cab: lesson.cab,
        excludeDate: lesson.excludeDate,
        scheduleType: lesson.scheduleType,
        endDate: lesson.endDate,
      });
    }
  });
  return activities;
};
