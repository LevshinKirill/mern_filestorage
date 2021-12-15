const Router = require('express')
const router = new Router()
const upload = require('../upload')
const linkController = require('../controllers/link.controller')

router.post('/create', upload.array('files', 3), async (req, res) => {
  linkController.createLink(req, res)
})

router.get('/:code', async (req, res) => {
  linkController.getFilesByLink(req, res)
})

module.exports = router