import express from 'express'
import User from '../db/models/User.js'
import jwt from 'jsonwebtoken'
import { config } from 'dotenv'

config()
const { JWT_SECRET } = process.env
const router = express.Router()

router.get('', async (req, res) => {
    return res.status(200).json({
        message: "OK"
    })
})

router.post('', async (req, res) => {
    const { name, email, phonenumber } = req.body;
    console.log(`name: ${name}\nemail: ${email}\nphonenumber: ${phonenumber}`)
})

export default router;