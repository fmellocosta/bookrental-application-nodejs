const express = require('express');
const morgan = require('morgan');

const userRoutes = require('../src/routes/userRoutes'); // Import your user routes

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/users', userRoutes);

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something went wrong!');
// });

module.exports = app;
