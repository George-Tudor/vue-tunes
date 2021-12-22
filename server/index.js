const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
    res.json({name: 'George'})
})

app.use(express.static('../client'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

async function initdb() {
    const { Client } = require('pg')
    const client = new Client({
        user: 'neogeo',
        host: 'localhost',
        database: 'neogeo',
    })
    await client.connect()
    const res = await client.query('SELECT * FROM artist')
    console.log(res.rows) // Hello world!
    await client.end()
}
initdb()
