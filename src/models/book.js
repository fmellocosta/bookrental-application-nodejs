const db = require('../../db/db');

const BookModel = {
    findById: (id) => db.books.find((book) => book.id.toString() === id),
    findAll: () => db.books
};

module.exports = BookModel;
