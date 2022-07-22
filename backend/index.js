const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Server Ok!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

//Teste de commit fork