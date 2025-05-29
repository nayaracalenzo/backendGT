const router = require('express').Router();




router.get('/:id/itens', (req, res) => {
    res.send('Listar carrinho') 
 })
router.post('/', (req, res) => {
    res.send('Criar carrinho') 
 })
router.post('/item', (req, res) => {
    res.send('Adicionar item ao carrinho') 
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