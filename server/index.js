const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use('/link/', require('./routes/link.routes'))

const PORT = process.env.PORT || 8000

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
  })
}

const start = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/mern_filestorage`)
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()