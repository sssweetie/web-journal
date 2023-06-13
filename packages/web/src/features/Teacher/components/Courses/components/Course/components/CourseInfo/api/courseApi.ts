import { AxiosInstance } from 'axios';
import { CourseApi } from '../hooks/useCourse';

export const courseApi = (httpClient: AxiosInstance): CourseApi => ({
  // API Курса
  // Получение конкретного курса
  getCourse: async (id: string | undefined) => {
    const response = await httpClient.get(`/teacher/:teacherId/course/${id}`);
    return response.data;
  },

  // Получение студентов и лабораторных работ
  getStudents: async (url: string, labId: string, query: string) => {
    const res = await httpClient.get(`${url}/lab/${labId}?students=${query}`);
    return res.data;
  },
});
