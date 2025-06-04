
async function inserirItensService(params) {
    

    if (!Number.isInteger(cart_id) || !Number.isInteger(product_id) || !Number.isInteger(quantity)) {
        return res.status(400).json({error: "Erro no corpo da requisição"})
    }
    client.query(
        `INSERT INTO cart_item (cart_id, product_id, quantity)
         VALUES ($1, $2, $3) RETURNING *`, [cart_id, product_id, quantity]
    )
}

async function alterarItensService(params) {
  

    if (!Number.isInteger(quantity) || quantity < 1) {
        return res.status(400).json({ error: "quantidade inválida. Deve ser número inteiro maior que 0"})
    }
}

async function deletarItensService(params) {

}

module.exports = {
    inserirItensService,
    alterarItensService,
    deletarItensService
}