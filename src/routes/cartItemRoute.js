const router = require('express').Router();
const { inserirItens, alterarItens, deletarItens} = require('../controllers/cartItemController.js')



 //insere itens no carrinho
router.post('/item', async (req, res) => {
    res.send(await inserirItens(req.body)) 
 })

 //Alterar a quantidade item carrinho
router.put('/item/:id', async (req, res) => {
    res.send(await alterarItens(req.params.id, req.body)) 
})

//deleta item
router.delete('/item/:id', async (req, res) => {
    res.send(await deletarItens(req.params.id)) 
})

