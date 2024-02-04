const express = require('express');
const router = express.Router();

const BookController = require('../controllers/bookController');

// Get a list of all books
router.get('/books', BookController.getBooks);

// Get a specific book by ID
router.get('/books/:bookId', BookController.getBookById);

module.exports = router;
