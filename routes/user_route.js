import express from 'express'
import User from '../db/models/User.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
import { checkUserExist } from '../helpers/helperfunc.js'

config()
const { JWT_SECRET } = process.env
const router = express.Router()

router.get('', async (req, res) => {
    return res.status(200).json({
        message: "OK"
    })
})

router.post('', async (req, res) => {
    const { name, email, phoneNumber } = req.body;
    try {
        // check if user already exist
        const { message, userexist } = await checkUserExist(email, phoneNumber)

        if (userexist) {
            return res.status(400).json({ success: false, message })
        }

        // create user if not already exist
        const newUser = new User({
            name,
            email,
            phoneNumber
        });

        await newUser.save()

        res.status(201).json({ success: true, message: 'User created successfully', user: newUser })

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Something went wrong, Please try again or contact support' });
    }

})

export default router;