const request = require('supertest');

const app = require('../src/app');
const UserModel = require('../src/models/user');

const mockedUsers = [
    {
        id: 1,
        username: 'user1',
        email: 'user1@example.com',
        password: 'password1',
    },
    {
        id: 2,
        username: 'user2',
        email: 'user2@example.com',
        password: 'password2',
    },
];

// Define tests for the user endpoints
describe('User API endpoints', () => {

    describe('GET /users/', () => {
        it('should respond with a list of users', async () => {
            const response = await request(app).get('/users/users/');

            // Assertions
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockedUsers);
        });

        it('should handle errors and respond with an error message', async () => {
            jest.spyOn(UserModel, 'findAll').mockRejectedValue(new Error('Mocked Database error'));

            const response = await request(app).get('/users/users/');

            // Assertions
            expect(response.status).toBe(500);
            expect(response.body.error).toBe('Could not retrieve users');
        });
    });

    describe('GET /users/:userId', () => {
        it('should respond with a specific user', async () => {
            const response = await request(app).get('/users/users/1');

            // Assertions
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockedUsers[0]);
        });

        it('should respond with an error when user is not found', async () => {
            const response = await request(app).get('/users/users/-1');

            // Assertions
            expect(response.status).toBe(404);
            expect(response.body.error).toBe('User not found');
        });

        it('should handle errors and respond with an error message', async () => {
            jest.spyOn(UserModel, 'findById').mockRejectedValue(new Error('Mocked Database error'));

            const response = await request(app).get('/users/users/1');

            // Assertions
            expect(response.status).toBe(500);
            expect(response.body.error).toBe('Could not retrieve the user');
        });
    });
});
