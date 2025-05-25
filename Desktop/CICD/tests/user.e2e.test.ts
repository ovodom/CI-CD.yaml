import request from 'supertest';
import app from '../src/app';

describe('User API', () => {
  let createdId: number;

  it('creates a user', async () => {
    const res = await request(app).post('/users').send({ name: 'Test', email: 't@example.com' });
    expect(res.statusCode).toBe(201);
    createdId = res.body.id;
  });

  it('gets all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
  });

  it('gets user by id', async () => {
    const res = await request(app).get(`/users/${createdId}`);
    expect(res.statusCode).toBe(200);
  });

  it('updates user', async () => {
    const res = await request(app).put(`/users/${createdId}`).send({ name: 'Updated' });
    expect(res.statusCode).toBe(200);
  });

  it('deletes user', async () => {
    const res = await request(app).delete(`/users/${createdId}`);
    expect(res.statusCode).toBe(204);
  });
});
