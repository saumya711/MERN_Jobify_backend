import User from '../models/UserModel.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../error/index.js';

const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        throw new BadRequestError('Please provide all values')
    }
    const user = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({ user})   
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