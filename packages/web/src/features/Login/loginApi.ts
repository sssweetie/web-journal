import { AxiosInstance } from 'axios';
import { User } from '@web-journal/libs';

export interface LoginApi {
  login: (data: User) => Promise<void>;
}

export const loginApi = (httpClient: AxiosInstance): LoginApi => ({
  login: async (data: User) => {
    const response = await httpClient.post('/login', data);
    return response.data;
  },
});
