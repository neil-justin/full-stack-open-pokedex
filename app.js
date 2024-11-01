const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 3000
// eslint-disable-next-line no-console
console.log('port', PORT)

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('hello version')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})