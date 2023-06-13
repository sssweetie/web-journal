import { AxiosInstance } from 'axios';
import { ICalendarApi } from '../hooks/useCalendar';
import { Schedule } from '@web-journal/libs';

export const calendarApi = (httpClient: AxiosInstance): ICalendarApi => ({
  // Получить календарное расписание
  get: async (teacherId: string | undefined) => {
    const res = await httpClient.get(`/teacher/${teacherId}/calendar`);
    return res.data;
  },

  // Обновить календарное расписание
  post: async (
    teacherId: string | undefined,
    oldActivity: { id: string; currentDate: string },
    newActivity: Schedule
  ) => {
    await httpClient.post(`/teacher/${teacherId}/calendar`, {
      oldActivity,
      newActivity,
    });
  },
});
