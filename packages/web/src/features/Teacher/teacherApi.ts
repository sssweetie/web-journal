import { AxiosInstance } from 'axios';

export const teacherApi = (httpClient: AxiosInstance) => ({
  getPersonalInfo: async (id: string | undefined) => {
    const response = await httpClient.get(`/teacher/${id}/main`);
    return response.data;
  },
});
