import { AxiosInstance } from 'axios';
import { ICoursesApi } from './useCourses';

export const coursesApi = (httpClient: AxiosInstance): ICoursesApi => ({
  getCourses: async (teacherId: string | undefined) => {
    const res = await httpClient.get(`/teacher/${teacherId}/courses`);  
    return res.data;
  },
});
