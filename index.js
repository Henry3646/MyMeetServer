import * as dotenv from 'dotenv'
import express from 'express';
import mongoose from 'mongoose';
dotenv.config()

const app = express()
const db = mongoose.connection

app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello world')
})

const port = process.env.PORT || 8080
mongoose.connect(process.env.MONGO_URI)
mongoose.set('strictQuery', true)
db.on('error', (error) => console.log(error))
db.once('open', () => console.log("Connected to Database"))
app.listen(port, () => console.log(`app listening on http://localhost:${port}`))