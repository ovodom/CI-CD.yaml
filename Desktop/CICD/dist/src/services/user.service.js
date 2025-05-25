const users = [];
let nextId = 1;
export const UserService = {
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
        users[idx] = Object.assign(Object.assign({}, users[idx]), data);
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
