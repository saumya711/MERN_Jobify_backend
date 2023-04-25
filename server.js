import Express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/errorHandler.js";
const app = Express()

app.get('/', (req, res) => {
    throw new Error('error')
    res.send('Welcome Home Page!!')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}!!`)
})