const express = require('express')
const app = express()
const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/favicon.ico', (req, res) => {
  res.sendFile(__dirname + '/public/favicon.ico')
  // res.end()
})

app.get('/:date', (req, res) => {
  let dateStr = req.params.date
  const date = dateStr.match(/^\d+$/) ? new Date(+req.params.date) : new Date(req.params.date)

  if (date instanceof Date && !isNaN(date.getTime())) {
    dateStr = date.toLocaleDateString().split('/')
    dateStr = `${months[dateStr[0] - 1]} ${dateStr[1]}, ${dateStr[2]}`
    res.json({ unix: date.getTime(), natural: dateStr })
  } else {
    res.send({ unix: null, natural: null })
  }
})

.listen(process.env.PORT || 5000, () => {
  console.log('Example app listening on port 5000!')
})

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!')
})
