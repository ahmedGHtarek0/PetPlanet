import mongoose from 'mongoose'
import express from 'express'



mongoose.connect('mongodb://localhost:27017/Pet').then(() => {
  console.log('Connected to MongoDB')
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err)
})

const app=express()
const port=3000
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})