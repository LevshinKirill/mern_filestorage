const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  originalName: { type: String, required: true },
  link: { type: Types.ObjectId, ref: 'Link' }
})

module.exports = model('File', schema)