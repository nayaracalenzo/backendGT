
const { listarCarrinhoItensRepository, criarCarrinhoRepository, limparCarrinhoRepository } = require("../repositories/cartRepository");


async function listarCarrinhoService(cart_id, user) {
    return await listarCarrinhoItensRepository(cart_id, user)
}
async function criarCarrinhoService(user) {
    return await criarCarrinhoRepository(user)
}
async function limparCarrinhoService(cart_id, user) {
    return await limparCarrinhoRepository(cart_id, user)
}

module.exports = {
    listarCarrinhoService,
    criarCarrinhoService,
    limparCarrinhoService
}