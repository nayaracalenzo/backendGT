
const router = require('express').Router()
const {registrar, login} = require('../controllers/userController.js')


router.post('/register',
    // #swagger.summary = 'Registro de novo usuário'
    // #swagger.description = 'Cria um novo usuário no sistema com nome, sobrenome, email e senha válidos'
    registrar )

router.post('/login',
    // #swagger.summary = 'Login de usuário'
    // #swagger.description = 'Autentica um usuário com email e senha. Retorna um token JWT que deve ser usado para acessar rotas protegidas.'
    // #swagger.responses[200] = {description: 'Login efetuado com sucesso'}
    // #swagger.responses[401] = {description: 'Não autorizado'}
    login)

module.exports = router