import { AxiosInstance } from 'axios';
import { IModalInfoApi } from './useNewModalForm';
import { IHomework } from '@web-journal/libs';

export const modalInfoApi = (httpClient: AxiosInstance): IModalInfoApi => ({
  updateHomework: async (homework: any) => {
    await httpClient.put(
      `${homework.pathname}/${homework.studentId}`,
      homework
    );
  },
});
