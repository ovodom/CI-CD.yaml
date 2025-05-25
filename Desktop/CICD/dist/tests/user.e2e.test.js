var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import request from 'supertest';
import app from '../src/app';
describe('User API', () => {
    let createdId;
    it('creates a user', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app).post('/users').send({ name: 'Test', email: 't@example.com' });
        expect(res.statusCode).toBe(201);
        createdId = res.body.id;
    }));
    it('gets all users', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app).get('/users');
        expect(res.statusCode).toBe(200);
    }));
    it('gets user by id', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app).get(`/users/${createdId}`);
        expect(res.statusCode).toBe(200);
    }));
    it('updates user', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app).put(`/users/${createdId}`).send({ name: 'Updated' });
        expect(res.statusCode).toBe(200);
    }));
    it('deletes user', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield request(app).delete(`/users/${createdId}`);
        expect(res.statusCode).toBe(204);
    }));
});
