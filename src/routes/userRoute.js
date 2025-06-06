
const router = require('express').Router()
const {registrar, login} = require('../controllers/userController.js')


router.post('/register', registrar )

router.post('/login', login)

module.exports = router