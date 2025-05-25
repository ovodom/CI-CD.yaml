"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
describe('User API', () => {
    let createdId;
    it('creates a user', async () => {
        const res = await (0, supertest_1.default)(app_1.default).post('/users').send({ name: 'Test', email: 't@example.com' });
        expect(res.statusCode).toBe(201);
        createdId = res.body.id;
    });
    it('gets all users', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get('/users');
        expect(res.statusCode).toBe(200);
    });
    it('gets user by id', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get(`/users/${createdId}`);
        expect(res.statusCode).toBe(200);
    });
    it('updates user', async () => {
        const res = await (0, supertest_1.default)(app_1.default).put(`/users/${createdId}`).send({ name: 'Updated' });
        expect(res.statusCode).toBe(200);
    });
    it('deletes user', async () => {
        const res = await (0, supertest_1.default)(app_1.default).delete(`/users/${createdId}`);
        expect(res.statusCode).toBe(204);
    });
});
