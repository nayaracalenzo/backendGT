
async function inserirItensService(params) {
    const carrinhoCheck = await client.query('SELECT id FROM cart WHERE id = $1', [cart_id])
        if (carrinhoCheck.rowCount === 0) {
            return res.status(404).json({ error: 'Carrinho não encontrado'})
        }

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
    client.query(
        'UPDATE cart_item SET quantity = $1 WHERE id = $2 RETURNING *',
        [quantity, id]
    )
    if (result.rowCount === 0) {
        return res.status(404).json({ error: 'Item não encontrado para alterar'})
    }
}

async function deletarItensService(params) {

}

module.exports = {
    inserirItensService,
    alterarItensService,
    deletarItensService
}