import { AxiosInstance } from 'axios';

export const labApi = (httpClient: AxiosInstance) => ({
  getStudents: async (query: string, url: string) => {
    const res = await httpClient.get(`${url}${query}`);
    return res.data;
  },
});
