const express = require('express')
const app = express()
const cors = require('cors')
const formidableMiddleware = require('express-formidable')
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(formidableMiddleware({}))
app.use('/api/link/', require('./routes/link.routes'))

const PORT = process.env.PORT || 8000

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()