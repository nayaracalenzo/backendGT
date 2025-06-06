const {criarUsuario, encontrarUsuario} = require('../repositories/userRepository.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const SECRET = process.env.JWT_SECRET

async function registrarUsuario(firstname, surname, email, password) {
    const usuarioExiste = await encontrarUsuario(email) 
    if(usuarioExiste) {
        throw new Error('Email já cadastrado')
    }
     const senhaCriptografada = await bcrypt.hash(password, 10) 
     const user = await criarUsuario({firstname, surname, email, password: senhaCriptografada})
     return {
        id: user.id,
        firstname: user.firstname,
        surname: user.surname,
        email: user.email
     }
}

async function loginUsuario(email, password) {
    const user = await encontrarUsuario(email) 
    if(!user) {
        throw new Error('Usuario não encontrado')
    }
    const senhaValida = await bcrypt.compare(password, user.password)
    if (!senhaValida) {
        throw new Error('Senha inválida')
    }
    const token = jwt.sign({id: user.id}, SECRET , {expiresIn: '1h'})
    return {
        token, 
        user: {
         id: user.id ,
         firstname: user.firstname,
         surname: user.surname,
         email: user.email
        }
    }
}

module.exports = {
    registrarUsuario,
    loginUsuario
}




