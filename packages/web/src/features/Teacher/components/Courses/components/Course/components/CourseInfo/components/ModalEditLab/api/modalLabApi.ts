import { AxiosInstance } from 'axios';
import { ModalLabApi } from '../hooks/useModalLab';
import { FileDB } from '@web-journal/libs';

export const modalLabApi = (httpClient: AxiosInstance): ModalLabApi => ({
  // API модального окна редактирования информации о лабораторной работе
  // Загрузить документ на сервер
  uploadDocument: async (
    file: FileDB,
    labId: string,
    url: string | undefined
  ) => {
    await httpClient.post(`${url}/lab/${labId}/edit`, file);
  },

  // Загрузить документ на компьютер
  downloadDocument: async () => {
    const res = await httpClient.get('');
  },
});
