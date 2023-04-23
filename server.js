import Express from "express";
const app = Express()

app.get('/', (req, res) => {
    res.send('Welcome Home Page!!')
})

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is Running on Port ${port}!!`)
})