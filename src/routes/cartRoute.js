const client = require('../../db');

const router = require('express').Router();

router.get('/:id/itens', async (req, res) => {
   const {id} = req.params
   try {
    await client.query(
        'SELECT * FROM cart_item WHERE cart_id = $1',
         [id]
    )
    res.status(200).json(result.rows)
   } catch (error) {
        console.log("Erro ao listar itens do carrinho", error)
        res.status(500).json({error: 'Erro ao buscar itens'})
   }  
 })
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
router.post('/item', async (req, res) => {
    const {cart_id, product_id, quantity} = req.body

    if (!cart_id || !product_id || !quantity) {
        return res.status(400).json({error: "Erro no corpo da requisição"})
    }
     
    try {
        await client.query(
            `INSERT INTO cart_item (cart_id, product_id, quantity)
             VALUES ($1, $2, $3)`, [cart_id, product_id, quantity]
        )
        res.status(201).json({message: 'Item adicionado com sucesso'})
    } catch (error) {
        console.log("Erro ao inserir item no carrinho", error)
        res.status(500).json({erro: "Erro ao adicionar item",
        details: error.message })
    }
   
 })
router.put('/item/:id', (req, res) => {
    res.send('Alterar a quantidade item carrinho') 
 })
router.delete('/item/:id', (req, res) => {
    res.send('Deletar item carrinho') 
 })
router.delete('/:id/itens', (req, res) => {
    res.send('Deletar carrinho') 
 })

module.exports = router;