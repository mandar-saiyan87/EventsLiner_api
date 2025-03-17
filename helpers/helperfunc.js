import User from '../db/models/User.js'

async function checkUserExist(email, phoneNumber) {
    const user = await User.findOne({ $or: [{ email }, { phoneNumber }] })

    if (user) {
        if (user.email === email) {
            return { message: "Email already in use", userexist: true }
        }

        if (user.phoneNumber === phoneNumber) {
            return { message: "Phone Number already in use", userexist: true }
        }
    }

    return { userexist: false }
}

export { checkUserExist }