import { AxiosInstance } from 'axios';

export const courseApi = (httpClient: AxiosInstance) => ({
  getCourse: async () => {
    const response = await httpClient.get(
      '/teacher/course/646390b8b668b43d4d0ca89e'
    );
    return response.data;
  },
});
