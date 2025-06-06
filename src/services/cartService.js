
const { listarCarrinhoRepository, criarCarrinhoRepository, limparCarrinhoRepository } = require("../repositories/cartRepository");


async function listarCarrinhoService(cart_id) {
    return await listarCarrinhoRepository(cart_id)
}
async function criarCarrinhoService(user_id) {
    return await criarCarrinhoRepository(user_id)
}
async function limparCarrinhoService(cart_id) {
    return await limparCarrinhoRepository(cart_id)
}

module.exports = {
    listarCarrinhoService,
    criarCarrinhoService,
    limparCarrinhoService
}