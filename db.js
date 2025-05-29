const {Client} = require('pg')


const client = new Client ({
    user:'postgres',
    host:'localhost',
    database: 'dc_store',
    password: '1234',
    port: 5432
})


//CREATE TABLE IF NOT EXISTS cart (
//   id SERIAL PRIMARY KEY,
//   user_id INTEGER,
//   created_at TIMESTAMP DEFAULT CURRENT TIMESTAMP
// );

//CREATE TABLE IF NOT EXISTS cart_item (
//   id SERIAL PRIMARY KEY,
//   cart_id INTEGER REFERENCES cart(id) ON DELETE CASCADE,
//   product_id INTEGER,
//   quantity INTEGER DEFAULT 1
//);

