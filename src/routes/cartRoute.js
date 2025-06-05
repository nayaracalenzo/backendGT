const {  criarCarrinho } = require('../controllers/cartController');
const router = require('express').Router();

//listar carrinho itens
// router.get('/:id/itens',listarItens)

//cria carrinho
router.post('/', criarCarrinho)

//Deleta todos os itens do carrinho
// router.delete('/:id/itens', deletarCarrinho)

module.exports = router;