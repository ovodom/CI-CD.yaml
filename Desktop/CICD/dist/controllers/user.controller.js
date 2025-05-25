"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../services/user.service");
exports.UserController = {
    getAll: (_req, res) => {
        res.json(user_service_1.UserService.getAll());
    },
    getById: (req, res) => {
        const user = user_service_1.UserService.getById(Number(req.params.id));
        user ? res.json(user) : res.status(404).json({ message: 'User not found' });
    },
    create: (req, res) => {
        const { name, email } = req.body;
        const newUser = user_service_1.UserService.create({ name, email });
        res.status(201).json(newUser);
    },
    update: (req, res) => {
        const updated = user_service_1.UserService.update(Number(req.params.id), req.body);
        updated ? res.json(updated) : res.status(404).json({ message: 'User not found' });
    },
    delete: (req, res) => {
        const success = user_service_1.UserService.delete(Number(req.params.id));
        res.status(success ? 204 : 404).end();
    }
};
