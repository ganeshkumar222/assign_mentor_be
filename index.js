import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import APPROUTES from './src/routes/index.js'
dotenv.config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())
app.use(cors())
app.use(APPROUTES)

app.listen(PORT,()=>{console.log("app is listening to port "+PORT)})