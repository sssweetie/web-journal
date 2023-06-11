import { Schedule } from '@web-journal/libs';
import moment from 'moment';
import { generateActivities, sortByDate } from 'packages/web/src/utils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface ICalendarApi {
  get: (teacherId: string | undefined) => Promise<any>;
  post: (
    teacherId: string | undefined,
    oldActivity: { id: string; currentDate: string },
    newActivity: Schedule
  ) => Promise<void>;
}

export const useCalendar = (calendarApi: ICalendarApi) => {
  const params = useParams();

  const [activities, setActivities] = useState<any>([]);
  const [recentlyActivities, setRecentlyActivities] = useState<any>([]);
  const getActivities = async () => {
    try {
      const res = await calendarApi.get(params.teacherId);
      const activities = generateActivities(res);
      setActivities(activities);
    } catch (error) {
      console.error(error);
    }
  };

  const rescheduleActivity = async (
    newActivity: Schedule,
    oldActivity: { id: string; currentDate: string }
  ) => {
    try {
      await calendarApi.post(params.teacherId, oldActivity, newActivity);
    } catch (error) {
      console.error(error);
    } finally {
      getActivities();
    }
  };

  const getRecentlyActivities = async () => {
    try {
      const res = await calendarApi.get(params.teacherId);
      const activities = generateActivities(res);
      const recentlyActivities = activities.filter((activity: Schedule) => {
        const date = moment(activity.startDate);
        return date.isSameOrAfter(moment());
      });
      const sortedRecentlyActivities = sortByDate(recentlyActivities);
      setRecentlyActivities(sortedRecentlyActivities);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getActivities();
    getRecentlyActivities();
  }, []);

  return { activities, rescheduleActivity, recentlyActivities };
};
