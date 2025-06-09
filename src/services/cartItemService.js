const {cartCheck} = require('../repositories/cartRepository')
const {inserirItensRepository, alterarItensRepository, deletarItensRepository} = require('../repositories/cartItemRepository')

async function inserirItensService(cart_id, product_id, quantity) {
    const carrinhoCheck = await cartCheck(cart_id)
        if (!carrinhoCheck) {
            const error = new Error("Carrinho não encontrado")
            error.status = 404;
            throw error;
        }

    if (!Number.isInteger(cart_id) || !Number.isInteger(product_id) || !Number.isInteger(quantity)) {
        const error = new Error("Erro no corpo da requisição")
            error.status = 400;
            throw error;
    }
    return await inserirItensRepository(cart_id, product_id, quantity)
}

async function alterarItensService(id, quantity) {
  

    if (!Number.isInteger(quantity) || quantity < 1) {
        const error = new Error("quantidade inválida. Deve ser número inteiro maior que 0")
        error.status = 400;
        throw error;
    }
    const result = await alterarItensRepository(id, quantity)
    if (!result) {
        const error = new Error("Item não encontrado para alterar")
        error.status = 404;
        throw error;
    }
    return result
}

async function deletarItensService(id) {
   return await deletarItensRepository(id)
}

module.exports = {
    inserirItensService,
    alterarItensService,
    deletarItensService
}