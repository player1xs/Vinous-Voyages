import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import router from './config/routes.js'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log(`request received: ${req.method} ${req.url}`)
  next()
})

app.use('/api', router)

async function startServer() {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('Well done Benedict. You are a genius')
    app.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`))
  } catch (error) {
    console.log('nope, still stupid Benedict')
  }
}

startServer()