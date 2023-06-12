import { LoginModel } from '../models/Login';
import { User } from '@web-journal/libs';

export const LoginController = {
  login: async (data: User) => {
    const res = await LoginModel.findOne({ login: data.login });
    return res;
  },
};
