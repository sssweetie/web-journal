import { AxiosInstance } from 'axios';
import { ModalLabApi } from '../hooks/useModalLab';
import { FileDB } from '@web-journal/libs';

export const modalLabApi = (httpClient: AxiosInstance): ModalLabApi => ({
  uploadDocument: async (
    file: FileDB,
    labId: string,
    url: string | undefined
  ) => {
    await httpClient.post(`${url}/lab/${labId}/edit`, file);
  },
  downloadDocument: async () => {
    const res = await httpClient.get('');
  },
});
