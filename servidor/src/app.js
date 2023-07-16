import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import 'express-async-errors'

import { routes } from './routes/index.js'
import { AppError } from './errors/index.js'

const app = express()

app.use(express.json())
app.use(cors({origin: process.env.FRONTEND_URL}))
app.use("/", routes)
app.use(
  (err, request, response, next) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message })
    }

    return response.status(500).send({
      status: "error",
      message: `Internal server error - ${err.message}`,
    })
  }
)

mongoose.connect(process.env.MONGODB_URL)
  .then(()=> console.log("Connected to MongoDB"))
  .catch((error)=> console.error(error))

app.listen(3333, () => {
  console.log("Server is running!🚀️")
})