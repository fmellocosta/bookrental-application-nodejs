const UserModel = require('../models/user');

const UserController = {
    getUsers: async (req, res) => {
        try {
            const users = await UserModel.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Could not retrieve users' });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.userId);

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Could not retrieve the user' });
        }
    },

    updateUser: async (req, res) => {
        try {
            req.body = {

            };

            const user = await UserModel.findByIdAndUpdate(
                req.params.userId,
                req.body,
                { new : true }
            );

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Could not update the user'});
        }
    },
};

module.exports = UserController;
