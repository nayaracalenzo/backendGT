const bcrypt = require('bcrypt')


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
    
}

module.exports = {
    registrarUsuario,
    loginUsuario
}




