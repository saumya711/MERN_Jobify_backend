import Express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
const app = Express()

//middleware
notFoundMiddleware

app.get('/', (req, res) => {
    res.send('Welcome Home Page!!')
})

app.use(notFoundMiddleware)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}!!`)
})