import { AxiosInstance } from 'axios';
import { ICalendarApi } from './useCalendar';

export const calendarApi = (httpClient: AxiosInstance): ICalendarApi => ({
  get: async (teacherId: string | undefined) => {
    const res = await httpClient.get(`/teacher/${teacherId}/calendar`);
    return res.data;
  },
});
