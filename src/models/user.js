const db = require('../../db/db');

const UserModel = {
    findById: (id) => db.users.find((user) => user.id.toString() === id),

    findByIdAndUpdate: (id, updatedData, options) => {
        const user = this.findById(id);
        if (!user) return null;
        return user;
    },

    findAll: () => db.users
};

module.exports = UserModel;
