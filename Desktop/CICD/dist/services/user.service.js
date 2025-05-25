"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const users = [];
let nextId = 1;
exports.UserService = {
    getAll: () => users,
    getById: (id) => users.find(u => u.id === id),
    create: ({ name, email }) => {
        const newUser = { id: nextId++, name, email };
        users.push(newUser);
        return newUser;
    },
    update: (id, data) => {
        const idx = users.findIndex(u => u.id === id);
        if (idx === -1)
            return;
        users[idx] = { ...users[idx], ...data };
        return users[idx];
    },
    delete: (id) => {
        const idx = users.findIndex(u => u.id === id);
        if (idx === -1)
            return false;
        users.splice(idx, 1);
        return true;
    }
};
