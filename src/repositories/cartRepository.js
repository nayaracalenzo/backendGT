const prisma = require("../config/prisma")


function cartCheck(cart_id) {
    return prisma.cart.findUnique({
        where: {id: cart_id},
        select: {id: true}
    })
}

function listarCarrinhoItensRepository(cart_id, user) {
    return prisma.cartItem.findMany({
            where: {
                cart: {
                  id: Number(cart_id),
                  user_id: user
                }
            }
    })
}

function criarCarrinhoRepository(user) {
    return prisma.cart.create({
        data: {user_id: user}
    })
}

 function limparCarrinhoRepository(cart_id, user) {
    return prisma.cartItem.deleteMany({
        where: {
            cart: {
              id: Number(cart_id),
              user_id: user
            }
        }
    })
}

module.exports = {
    cartCheck,
    listarCarrinhoItensRepository,
    criarCarrinhoRepository,
    limparCarrinhoRepository
}