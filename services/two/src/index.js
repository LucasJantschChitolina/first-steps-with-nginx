const express = require('express')
const app = express()
const port = 3000

app.get('/api/two', (req, res) => {
  res.send(`Two listening at http://localhost:${port}`)
})

app.listen(port, () => {
  console.log(`Two listening at http://localhost:${port}`)
})