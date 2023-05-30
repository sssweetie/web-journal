import { ISchedule } from '@web-journal/libs';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface ICalendarApi {
  get: (id: string) => any;
}

export const useCalendar = (calendarApi: ICalendarApi) => {
  const params = useParams();
  console.log(params);
  const [schedule, setSchedule] = useState<ISchedule[]>([]);

  const getSchedule = async () => {
    const res = await calendarApi.get('qwe');
    setSchedule(res);
  };

  useEffect(() => {
    getSchedule();
  }, []);

  return { schedule };
};
