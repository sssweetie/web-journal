import { AxiosInstance } from 'axios';

export const getCourses = async (
  httpClient: AxiosInstance,
  teacherId: string | undefined
) => {
  const response = await httpClient.get(`/teacher/${teacherId}/main`);
  return response.data;
};
