const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  code: { type: String, required: true, unique: true },
  files: [{ type: Types.ObjectId, ref: 'File' }]
})

module.exports = model('Link', schema)