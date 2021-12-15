const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use('/link/', require('./routes/link.routes'))

const PORT = process.env.PORT || 8000

const start = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/mern_filestorage`)
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()
