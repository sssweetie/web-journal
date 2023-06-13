import { AxiosInstance } from 'axios';
import { User } from '@web-journal/libs';
import { LoginApi } from './hooks/useLogin';

export const loginApi = (httpClient: AxiosInstance): LoginApi => ({

  //API формы логинизации
  login: async (data: User) => {
    const response = await httpClient.post('/login', data);
    return response.data.message;
  },
});
