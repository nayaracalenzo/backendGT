

async function cartCheck(cart_id) {
    client.query('SELECT id FROM cart WHERE id = $1', [cart_id])
}

module.exports = {cartCheck}