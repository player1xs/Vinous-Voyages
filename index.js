import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

const app = express()



async function startServer() {
  try {
    await mongoose.connect(process.env.CONNETION_STRING)
    console.log('Well done Benedict. You are a genius')
    app.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`))
  } catch (error) {
    console.log('nope, still stupid Benedict')
  }
}

startServer()