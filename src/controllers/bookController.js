const BookModel = require('../models/book');

const BookController = {
    getBooks: async (req, res) => {
        try {
            const books = await BookModel.findAll();
            res.json(books);
        } catch (error) {
            res.status(500).json({ error: 'Could not retrieve books' });
        }
    },

    getBookById: async (req, res) => {
        try {
            const book = await BookModel.findById(req.params.bookId);

            if (!book) {
                return res.status(404).json({ error: 'Book not found' });
            }

            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({ error: 'Could not retrieve the book' });
        }
    },
};

module.exports = BookController;
