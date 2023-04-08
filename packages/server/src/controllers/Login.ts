import { LoginModel } from '../models/Login';
import { User } from '@web-journal/libs';

export const LoginController = {
  login: async (data: User) => {
    await LoginModel.findOne(data);
  },
};
