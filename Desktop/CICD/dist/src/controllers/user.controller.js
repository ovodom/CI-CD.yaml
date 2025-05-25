import { UserService } from '../services/user.service';
export const UserController = {
    getAll: (_req, res) => {
        res.json(UserService.getAll());
    },
    getById: (req, res) => {
        const user = UserService.getById(Number(req.params.id));
        user ? res.json(user) : res.status(404).json({ message: 'User not found' });
    },
    create: (req, res) => {
        const { name, email } = req.body;
        const newUser = UserService.create({ name, email });
        res.status(201).json(newUser);
    },
    update: (req, res) => {
        const updated = UserService.update(Number(req.params.id), req.body);
        updated ? res.json(updated) : res.status(404).json({ message: 'User not found' });
    },
    delete: (req, res) => {
        const success = UserService.delete(Number(req.params.id));
        res.status(success ? 204 : 404).end();
    }
};
