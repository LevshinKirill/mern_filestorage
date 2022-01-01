const shortid = require('shortid')
const Link = require('../models/Link')
const File = require('../models/File')
const zip = require('express-zip')
const upload = require('../upload')

class LinkController {
  createLink = async (req, res) => {
    try {
      if (req.files.length < 1) {
        throw new Error('No files detected')
      }
      const link = new Link({
        code: shortid.generate()
      })
      for (const file of req.files) {
        const fileRecord = new File({
          name: file.filename,
          originalName: file.originalname,
          link: link._id
        })
        await fileRecord.save()
        link.files.push(fileRecord)
        await link.save()
      }
      res.json({
        message: 'Link has been created',
        link: `${req.headers.host}\/link/${link.code}`
      })
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }

  getFilesByLink = async (req, res) => {
    try {
      const files = []
      const link = await Link.findOne({ code: req.params.code }).populate('files')
      link.files.forEach(file => {
        files.push({
          path: `uploads/${file.name}`,
          name: file.originalName
        })
      })
      res.zip(files)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: err.message })
    }
  }
}

module.exports = new LinkController()