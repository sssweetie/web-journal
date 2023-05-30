import { AxiosInstance } from 'axios';

export const calendarApi = (httpClient: AxiosInstance) => ({
  get: async () => {
    const res = httpClient.get('/teacher/:teacherId/calendar');
  },
});
