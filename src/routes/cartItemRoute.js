const router = require('express').Router();
const { inserirItens, alterarItens, deletarItens} = require('../controllers/cartItemController.js')
const authMiddleware = require('../middleware/authMiddleware.js')



 //insere itens no carrinho
router.post('/', authMiddleware, inserirItens)

 //Alterar a quantidade item carrinho
router.put('/:id', alterarItens) 

//deleta item
router.delete('/:id', deletarItens) 


module.exports = router