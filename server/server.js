require('dotenv').config();

const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const app = express()

console.log("ENV:", process.env.DATABASE_URL);

const indexRouter = require('./routes/index')

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use('/', indexRouter)

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database connection successful'))
.catch((err) => console.log('error in db connection', err));

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})