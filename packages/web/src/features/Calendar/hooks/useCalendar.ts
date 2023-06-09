import { generateActivities } from 'packages/web/src/utils';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface ICalendarApi {
  get: (teacherId: string | undefined) => Promise<any>;
}

export const useCalendar = (calendarApi: ICalendarApi) => {
  const params = useParams();

  const [activities, setActivities] = useState<any>([]);

  const getActivities = async () => {
    try {
      const res = await calendarApi.get(params.teacherId);
      const activities = generateActivities(res);
      setActivities(activities);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  return { activities };
};
