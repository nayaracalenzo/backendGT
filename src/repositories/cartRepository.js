const prisma = require("../config/prisma")


function cartCheck(cart_id) {
    return prisma.cart.findUnique({
        where: {id: cart_id},
        select: {id: true}
    })
}

function listarCarrinhoItensRepository(cart_id) {
    return prisma.cartItem.findMany({
            where: {id: Number(cart_id)}
    })
}

function criarCarrinhoRepository(user_id) {
    return prisma.cart.create({
        data: {user_id}
    })
}

 function limparCarrinhoRepository(cart_id) {
    return prisma.cartItem.delete({
        where: {id: Number(cart_id)}
    })
}

module.exports = {
    cartCheck,
    listarCarrinhoItensRepository,
    criarCarrinhoRepository,
    limparCarrinhoRepository
}