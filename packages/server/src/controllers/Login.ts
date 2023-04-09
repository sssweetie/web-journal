import { LoginModel } from '../models/Login';
import { User } from '@web-journal/libs';

export const LoginController = {
  login: async (data: User) => {
    const result = await LoginModel.findOne(data);
    return result === null ? false : true;
  },
};
