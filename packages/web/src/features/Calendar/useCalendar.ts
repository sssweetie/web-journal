import { useEffect, useState } from 'react';

interface Schedule {
  date_start: string;
  date_end: string;
  type: string;
  name: string;
  repeatWeek: boolean;
  repeatTwoWeek: boolean;
}

export interface ICalendarApi {
  get: () => Promise<Schedule[]>;
}

export const useCalendar = (calendarApi: ICalendarApi) => {
  const [schedule, setSchedule] = useState<Schedule[]>([]);

  const getSchedule = async () => {
    const res = await calendarApi.get();
    setSchedule(res);
  };

  useEffect(() => {
    getSchedule();
  }, []);

  return { schedule };
};
