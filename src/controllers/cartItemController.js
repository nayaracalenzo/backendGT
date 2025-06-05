
async function inserirItens() {
    const {cart_id, product_id, quantity} = req.body
    try {
        const result = await inserirItensService(cart_id, product_id, quantity)
        res.status(201).json(result)
    } catch (error) {
        console.log("Erro ao inserir item no carrinho", error)
        res.status(error.status || 500).json(
            {erro: error.message,
            details: error.details || null
        })
    }
   
}
async function alterarItens() {
    const {id} = req.params
    const {quantity} = req.body
    try {
        const result = await alterarItensService(id, quantity)
        res.status(200).json(result)
    } catch (error) {
        console.log("Erro ao alterar item", error)
        res.status(error.status || 500).json(
            {erro: error.message,
            details: error.details || null
        })
    }
}
async function deletarItens() {
    const {id} = req.params
    try {
        const result = await client.query('DELETE FROM cart_item WHERE id = $1 RETURNING *',
             [id])
        
        res.status(200).json({mensage: "Item deletado com sucesso", result: result.rows})     
    } catch (error) {
        console.log("Erro ao deletar item", error)
        res.status(500).json({erro: "Erro ao deletar item",
        details: error.message })
    }
}

module.exports = {
    inserirItens,
    alterarItens,
    deletarItens
}