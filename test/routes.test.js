const request = require('supertest');

const app = require('../src/app');

describe('Unknown API endpoints', () => {

    describe('GET /unknow/', () => {
        it('should handle errors and respond with an error message', async () => {
            const response = await request(app).get('/unknow/');

            // Assertions
            expect(response.status).toBe(500);
            expect(response.body.error).toBe(`Sorry, the page you're looking for doesn't exist`);
        });
    });
});
