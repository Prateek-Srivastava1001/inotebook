const connectToMongo = require("./db");
const express = require('express')
connectToMongo();const connectToMongo = require("./db");
const express = require('express')
connectToMongo();

const app = express()
const port = 5000

app.use(express.json())

//Available Routes
app.use('/api/auth', require('./Routes/auth'))
app.use('/api/notes', require('./Routes/notes'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

