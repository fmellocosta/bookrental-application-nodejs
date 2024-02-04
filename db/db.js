const users = [
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

const books = [
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

module.exports = {
    users,
    books
};
