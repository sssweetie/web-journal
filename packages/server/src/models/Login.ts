import { model, Schema } from 'mongoose';
import { User } from '@web-journal/libs';

const loginSchema = new Schema<User>(
  {
    login: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: 'users' }
);

export const LoginModel = model<User>('users', loginSchema);
