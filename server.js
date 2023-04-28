import express from "express";
const app = express()
import dotenv from 'dotenv'
dotenv.config()

// db and authenticateUser
import connectDB from "./database/connect.js";

// routers
import authRouter from './routes/authRoutes.js';
import jobhRouter from './routes/jobRoutes.js';

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Welcome Home Page!!')
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