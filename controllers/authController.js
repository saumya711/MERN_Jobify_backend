import User from '../models/UserModel.js';

const register = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({ user})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: 'there was an error'})
    }
}

const login = async (req, res) => {
    res.send('Login User');
}

const updateUser = async (req, res) => {
    res.send('Update User');
}

export {
    register,
    login,
    updateUser
}