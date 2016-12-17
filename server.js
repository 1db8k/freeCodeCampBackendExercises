const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/favicon', (req, res) => {
  res.sendFile(__dirname + '/public/favicon.ico')
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!')
})
