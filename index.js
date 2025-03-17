import express from 'express';
import cors from 'cors'
import { connectDB } from './db/db.js';
import UserRouter from './routes/user_route.js'


connectDB()
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())


//Routes
app.use('/api/userauth', UserRouter)


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})