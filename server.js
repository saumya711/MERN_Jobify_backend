// import cors from 'cors';
import express from "express";
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors';
import morgan from "morgan";

// db and authenticateUser
import connectDB from "./database/connect.js";

// routers
import authRouter from './routes/authRoutes.js';
import jobhRouter from './routes/jobRoutes.js';

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";

if(process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'))
}
// app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ msg: 'Welcome Home Page!!' })
})

app.get('/api/v1', (req, res) => {
    res.json({ msg: 'API' })
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobhRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`Server is Running on Port ${port}!!`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()