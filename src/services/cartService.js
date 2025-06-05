const { criarCarrinhoRepository } = require("../repositories/cartRepository");


async function criarCarrinhoService(user_id) {
    return await criarCarrinhoRepository(user_id)
}

module.exports = {criarCarrinhoService}