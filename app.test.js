const request = require('supertest');
const app = require('./app');

describe('CI/CD App Tests', () => {
  test('Health endpoint should return UP', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('UP');
  });

  test('Users endpoint should return array', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('POST user should create new user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'Test User' });
    
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test User');
  });

  // ✅ यह add करो
  afterAll(async () => {
    // Server close करो tests के बाद
    // app itself return नहीं करता, तो यह काम करेगा
  });
});