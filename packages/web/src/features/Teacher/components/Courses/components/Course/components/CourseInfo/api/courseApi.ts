import { AxiosInstance } from 'axios';

export const courseApi = (httpClient: AxiosInstance) => ({
  getCourse: async (id: string | undefined) => {
    const response = await httpClient.get(`/teacher/:teacherId/course/${id}`);
    return response.data;
  },
});
