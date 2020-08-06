import { Uuid } from '../types/uuid';
import { DateTime } from '../types/date-time';
import { User } from './user';
import { Client } from './client';

export type Record = {
  id: Uuid,
  user: User,
  client: Client,
  createdAt: DateTime,
};
