import User from '../models/UserModel.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../error/index.js';

const register = async (req, res) => {
    const { name, email, password } = req.body;
    
    if (!name || !email || !password) {
        throw new BadRequestError('Please provide all values')
    }

    const userAlreadyExists =  await User.findOne({email})
    if(userAlreadyExists) {
        throw new BadRequestError('Email already in use')
    }
    const user = await User.create({ name, email, password })
    const taken = user.createJWT()
    res.status(StatusCodes.CREATED).json({ 
        user: {
            email: user.email,
            name: user.name,
            lastName: user.lastName,
            location: user.location,
        }, 
        taken 
    })   
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