import { AxiosInstance } from 'axios';

export const labApi = (httpClient: AxiosInstance) => ({
  getStudents: async (query: string) => {
    const res = await httpClient.get(
      `/teacher/:teacherId/course/:courseId/lab/:labId${query}`
    );
    return res;
  },
});
