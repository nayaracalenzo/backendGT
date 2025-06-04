
async function inserirItensService(params) {
    const {cart_id, product_id, quantity} = req.body

    if (!Number.isInteger(cart_id) || !Number.isInteger(product_id) || !Number.isInteger(quantity)) {
        return res.status(400).json({error: "Erro no corpo da requisição"})
    }
}

async function alterarItensService(params) {
    const {id} = req.params
    const {quantity} = req.body

    if (!Number.isInteger(quantity) || quantity < 1) {
        return res.status(400).json({ error: "quantidade inválida. Deve ser número inteiro maior que 0"})
    }
}

async function deletarItensService(params) {
    const {id} = req.params
}

module.exports = {
    inserirItensService,
    alterarItensService,
    deletarItensService
}