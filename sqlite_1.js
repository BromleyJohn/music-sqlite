const express = require('express')
const cors = require('cors') 
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./music.db')
const sql = require('./sql.js')

   
app.use(cors()) //definately need this & app.listen below!

app.listen(port, () => {
  console.log(`sqlite3 music app listening at http://localhost:${port}`)
})


app.get('/', (req, res) => {
    db.all(sql.getMusos(), (err, rows) => {
    res.send(rows)
   })
})

app.post('/', (req, res) => {
   db.run(sql.addMuso())
   res.send('Musician added')
})


app.delete('/', (req, res) => {
   db.run(sql.deleteMuso())
   res.send('Musician deleted')
})

app.put('/', (req, res) => {
   db.run(sql.updateMuso('Viv',6))
   res.send('Musician Updated')
})

db.close
