const prisma = require('../config/prisma.js')

async function inserirItensRepository (cart_id, product_id, quantity) {
    return await prisma.cartItem.create({
        data: {cart_id, product_id, quantity}
    })
}

async function alterarItensRepository (id, quantity) {

    try {
        const item = await prisma.cartItem.update({
            where: {id: Number(id)},
            data: {quantity}
        })
    return item
    } catch (error) {
        if(error.code === 'P2025') {
            return null
        }
        throw error
    }
}
async function deletarItensRepository (id) {
    try {
        const item = await prisma.cartItem.delete({
            where:  {id: Number(id)}
        })
        return item
    } catch (error) {
        if(error.code === 'P2025') {
            return null
        }
        throw error;
    }
}

module.exports = {
    inserirItensRepository,
    alterarItensRepository,
    deletarItensRepository
}
