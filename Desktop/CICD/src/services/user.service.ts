import { User } from '../models/user.model';

const users: User[] = [];
let nextId = 1;

export const UserService = {
  getAll: () => users,
  getById: (id: number) => users.find(u => u.id === id),
  create: ({ name, email }: Omit<User, 'id'>): User => {
    const newUser = { id: nextId++, name, email };
    users.push(newUser);
    return newUser;
  },
  update: (id: number, data: Partial<Omit<User, 'id'>>): User | undefined => {
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return;
    users[idx] = { ...users[idx], ...data };
    return users[idx];
  },
  delete: (id: number): boolean => {
    const idx = users.findIndex(u => u.id === id);
    if (idx === -1) return false;
    users.splice(idx, 1);
    return true;
  }
};
