import { Uuid } from '../types/uuid';
import { Member } from './member';

export type User = {
  id: Uuid,
  member: Member,
};
