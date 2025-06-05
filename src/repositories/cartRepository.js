const prisma = require("../config/prisma")


async function cartCheck(cart_id) {
    return await prisma.cart.findUnique({
        where: {id: cart_id},
        select: {id: true}
    })
}

async function listarCarrinhoItensRepository(params) {
    client.query(
        'SELECT * FROM cart_item WHERE cart_id = $1',
         [id]
    )
}

async function criarCarrinhoRepository(user_id) {
    return await prisma.cart.create({
        data: {user_id}
    })
}

module.exports = {
    cartCheck,
    listarCarrinhoItensRepository,
    criarCarrinhoRepository
}