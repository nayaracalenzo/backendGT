const router = require('express').Router();


//listar itens
router.get('/:id/itens', async (req, res) => {
    res.send(await listarItens(req.params.id)) 
})


//cria carrinho
router.post('/', async (req, res) => {
    const {user_id} = req.body 
    try {
        await client.query(
            'INSERT INTO cart (user_id) VALUES ($1)', 
            [user_id]
        )
        res.status(201).json({message: 'Carrinho criado com sucesso'})
    } catch (error) {
        console.log("Erro ao criar carrinho", error)
        res.status(500).json({erro: "Erro ao criar carrinho", details: error.message })
    }
 })

 

router.delete('/:id/itens', async (req, res) => {
     const {id} = req.params
     try {
        await client.query('DELETE FROM cart_item WHERE cart_id = $1', [id])
        res.status(200).json({mensage: "Carrinho limpo"})
     } catch (error) {
        console.log("Erro ao limpar carrinho", error)
        res.status(500).json({erro: "Erro ao limpar carrinho",
        details: error.message })
     }
 })

module.exports = router;