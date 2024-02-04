const express = require('express');
const morgan = require('morgan');

const userRoutes = require('../src/routes/userRoutes');
const bookRoutes = require('../src/routes/bookRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/books', bookRoutes);

app.use((req, res, next) => {
    res.status(500).json({ error: `Sorry, the page you're looking for doesn't exist` });
});

module.exports = app;
