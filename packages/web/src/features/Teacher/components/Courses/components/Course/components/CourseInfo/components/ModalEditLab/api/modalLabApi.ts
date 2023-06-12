import { AxiosInstance } from 'axios';
import { ModalLabApi } from '../hooks/useModalLab';

export const modalLabApi = (httpClient: AxiosInstance): ModalLabApi => ({
  uploadDocument: async (
    file: any,
    labId: string | undefined,
    url: string | undefined
  ) => {
    const res = await httpClient.post(`${url}/lab/${labId}/edit`, file);
  },
  downloadDocument: async () => {
    const res = await httpClient.get('');
  },
});
