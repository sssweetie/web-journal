import { ISchedule } from '@web-journal/libs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface ICalendarApi {
  get: (teacherId: string | undefined) => Promise<any>;
}

export const useCalendar = (calendarApi: ICalendarApi) => {
  const params = useParams();

  const [schedule, setSchedule] = useState<ISchedule[]>([]);

  const getSchedule = async () => {
    try {
      const res = await calendarApi.get(params.teacherId);
      setSchedule(res.events);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSchedule();
  }, []);

  return { schedule };
};
