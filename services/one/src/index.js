const express = require('express')
const app = express()
const port = 3000

app.get('/api/one', (req, res) => {
  res.send(`One at http://localhost:${port}`)
})

app.listen(port, () => {
  console.log(`One at http://localhost:${port}`)
})