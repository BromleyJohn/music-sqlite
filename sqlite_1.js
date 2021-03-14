const express = require('express')
const cors = require('cors') 
const app = express()
const port = 3000
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./music.db')
   
app.use(cors())

app.listen(port, () => {
  console.log(`sqlite3 music app listening at http://localhost:${port}`)
})


app.get('/', (req, res) => {
   db.all('SELECT * FROM tblMusos ORDER BY last_name', (err, rows) => {
      res.send(rows)
   })
})

app.post('/', (req, res) => {
   //initial post test using postman
   //let muso = [{"id_muso":5,"last_name":"Jagger","other_names":"Mick","id_band":"ROL"}]
   //res.send(muso)
   db.run(`INSERT INTO tblMusos (id_muso,last_name,other_names,id_band) VALUES(6,'Richards','Keith','ROL')`)
   res.send('Musician added')
})


app.delete('/', (req, res) => {
   db.run('DELETE FROM tblMusos WHERE id_muso = 6')
   res.send('Musician deleted')
})

app.put('/', (req, res) => {
   db.run('UPDATE tblMusos SET other_names = "Viv" WHERE id_muso = 6')
   res.send('Musician updated')
})

db.close
