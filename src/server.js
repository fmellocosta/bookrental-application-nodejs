const app = require('./app'); // Replace './app' with the actual path to your Express app setup

const PORT = process.env.NODE_ENV === 'production' ? 3000 : 0;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
