import { AxiosInstance } from 'axios';
import { ICoursesApi } from '../hooks/useCourses';

export const coursesApi = (httpClient: AxiosInstance): ICoursesApi => ({
  //API Курсов
  getCourses: async (teacherId: string | undefined) => {
    const res = await httpClient.get(`/teacher/${teacherId}/courses`);
    return res.data;
  },
});
