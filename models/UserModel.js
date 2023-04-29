import mongoose, { Schema } from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, ' Please add Name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        required: [true, ' Please add Email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please add a validate email',
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, ' Please add Password'],
        unique: true,
        minlength: 3,
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'lastName',
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: 20,
        default: 'my city',
    },
})

export default mongoose.model('User', UserSchema)