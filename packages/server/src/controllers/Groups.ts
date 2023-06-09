import { ObjectId } from 'mongoose';
import { GroupsModel } from '../models/Groups';

export const GroupsController = {
  // Получить группы 
  getGroups: async (groupId: ObjectId) => {
    const result = await GroupsModel.find({ _id: groupId });
    return result;
  },
};
