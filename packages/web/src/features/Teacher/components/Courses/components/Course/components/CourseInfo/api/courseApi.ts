import { AxiosInstance } from 'axios';
import { CourseApi } from '../hooks/useCourse';

export const courseApi = (httpClient: AxiosInstance): CourseApi => ({
  getCourse: async (id: string | undefined) => {
    const response = await httpClient.get(`/teacher/:teacherId/course/${id}`);
    return response.data;
  },
  getStudents: async (url: string, labId: string, query: string) => {
    const res = await httpClient.get(`${url}/lab/${labId}?students=${query}`);
    return res.data;
  },
});
