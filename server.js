import Express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";

import dotenv from 'dotenv'
import connectDB from "./middleware/database/connect.js";
dotenv.config()

const app = Express()

app.get('/', (req, res) => {
    throw new Error('error')
    res.send('Welcome Home Page!!')
})

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