import { AxiosInstance } from 'axios';

export const appApi = (httpClient: AxiosInstance) => ({
  getAllCourses: async () => {
    const response = await httpClient.get('/teacher/main');
    return response.data;
  },
});
