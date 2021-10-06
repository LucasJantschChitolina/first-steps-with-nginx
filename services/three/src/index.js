const express = require('express')
const app = express()
const port = 3000

app.get('/api/three', (req, res) => {
  res.send(`Three listening at http://localhost:${port}`)
})

app.listen(port, () => {
  console.log(`Three listening at http://localhost:${port}`)
})