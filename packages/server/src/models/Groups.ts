import { model, Schema } from 'mongoose';
import { Group } from '@web-journal/libs';

const groupSchema = new Schema<Group>(
  {
    name: {
      type: String,
      required: true,
    },
    studentsID: [
      {
        type: Schema.Types.ObjectId,
        ref: 'students',
      },
    ],
  },
  { collection: 'groups' }
);

export const GroupsModel = model<Group>('groups', groupSchema);
