import mongoose from 'mongoose';
import validator from 'validator'
const { Schema } = mongoose;

const UserSchema = Schema(
    {
        name: {
            type: String,
            required: [true, 'Email Required'],
            trim: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            validate: {
                validator: validator.isEmail,
                message: "Please enter valid email address"
            },
        },
        phoneNumber: {
            type: String,
            required: true,
            trim: true,
            match: [/^\+?[1-9]\d{1,14}$/, 'Please enter a valid phone number']
        }
    }, {
    timestamps: true,
}
)

const User = mongoose.model('User', UserSchema)
export default User