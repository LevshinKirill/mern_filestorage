const Router = require('express')

const router = new Router()

router.post('/create', async (req, res) => {
  try {
    res.json({
      message: 'Link has been created'
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({ message: 'Server error' })
  }
})

module.exports = router