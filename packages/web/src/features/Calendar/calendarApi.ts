import { AxiosInstance } from 'axios';

export const calendarApi = (httpClient: AxiosInstance) => ({
  get: async (id: string) => {
    const res = await httpClient.get(`/teacher/${id}/calendar`);
    return res;
  },
});
