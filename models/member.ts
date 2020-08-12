import { Uuid } from '../types/uuid';
import { Contacts } from './contacts';

export type Member = {
  id: Uuid,
  name: string,
  contacts: Contacts,
};
