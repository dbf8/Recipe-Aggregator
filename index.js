const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(4000, () => {
  console.log('this is working (on 4000)')
})