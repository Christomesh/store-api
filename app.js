require("dotenv").config()
//asyn errors

const express = require("express")
app = express()

const connectDB = require("./db/connect")

const notFoundMiddleware = require("./middlewares/notfound")
const errorMiddleware = require("./middlewares/error-handler")


// middleware
app.use(express.json())

// routes
app.get("/", (req, res)=>{
    res.send("<h1>Store API</h1><a href='/api/v1/products'>products route</a>")
})

app.use(notFoundMiddleware)
app.use(errorMiddleware)


// spin server
const port = process.env.PORT || 3000

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=> console.log(`server is listening port ${port}...`))
    } catch (err) {
        console.log(err)
    }
}
start()