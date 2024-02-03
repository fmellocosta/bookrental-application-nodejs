// const db = require('../../db/db');

const db = {
    users: [
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
    ]
};

const UserModel = {
    findById: (id) => db.users.find((user) => user.id.toString() === id),
    findAll: () => db.users
};

module.exports = UserModel;
