import { Uuid } from '../types/uuid';
import { DateTime } from '../types/date-time';
import { Member } from './member';
import { Client } from './client';

export type Record = {
  id: Uuid,
  user: Member,
  client: Client,
  createdAt: DateTime,
};
