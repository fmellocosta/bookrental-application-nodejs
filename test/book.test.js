const request = require('supertest');

const app = require('../src/app');
const BookModel = require('../src/models/book');

const mockedBooks = [
    {
        id: 1,
        title: 'Book 1',
        user: null,
    },
    {
        id: 2,
        title: 'Book 2',
        user: null,
    },
];

// Define tests for the book endpoints
describe('Book API endpoints', () => {

    describe('GET /books/', () => {
        it('should respond with a list of books', async () => {
            const response = await request(app).get('/books/books/');

            // Assertions
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockedBooks);
        });

        it('should handle errors and respond with an error message', async () => {
            jest.spyOn(BookModel, 'findAll').mockRejectedValue(new Error('Mocked Database error'));

            const response = await request(app).get('/books/books/');

            // Assertions
            expect(response.status).toBe(500);
            expect(response.body.error).toBe('Could not retrieve books');
        });
    });

    describe('GET /books/:bookId', () => {
        it('should respond with a specific book', async () => {
            const response = await request(app).get('/books/books/1');

            // Assertions
            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockedBooks[0]);
        });

        it('should respond with an error when book is not found', async () => {
            const response = await request(app).get('/books/books/-1');

            // Assertions
            expect(response.status).toBe(404);
            expect(response.body.error).toBe('Book not found');
        });

        it('should handle errors and respond with an error message', async () => {
            jest.spyOn(BookModel, 'findById').mockRejectedValue(new Error('Mocked Database error'));

            const response = await request(app).get('/books/books/1');

            // Assertions
            expect(response.status).toBe(500);
            expect(response.body.error).toBe('Could not retrieve the book');
        });
    });
});
