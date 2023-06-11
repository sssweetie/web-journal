import { AxiosInstance } from 'axios';
import { ICalendarApi } from '../hooks/useCalendar';
import { Schedule } from '@web-journal/libs';

export const calendarApi = (httpClient: AxiosInstance): ICalendarApi => ({
  get: async (teacherId: string | undefined) => {
    const res = await httpClient.get(`/teacher/${teacherId}/calendar`);
    return res.data;
  },
  post: async (
    teacherId: string | undefined,
    excludeDate: string,
    newActivity: Schedule,
    activityId: string
  ) => {
    await httpClient.post(`/teacher/${teacherId}/calendar`, {
      excludeDate,
      newActivity,
      activityId,
    });
  },
});
