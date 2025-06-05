const router = require('express').Router();
const { inserirItens, alterarItens, deletarItens} = require('../controllers/cartItemController.js')


 //insere itens no carrinho
router.post('/item', inserirItens)

 //Alterar a quantidade item carrinho
router.put('/item/:id', alterarItens) 

//deleta item
router.delete('/item/:id', deletarItens) 


module.exports = router