const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)


const sql = `INSERT INTO people(name) values('sidnei')`
connection.query(sql)

const query = `SELECT * FROM people`
nomes = "<ul>"
connection.query(query, function(err, data, fields) {
    if (err) throw err;
    else {        
        data.forEach((val) => nomes += "<li>" + val.name + "</li>");
    }
    nomes += "</ul>"
    console.log(nomes)
})
connection.end()

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks!</h1>' + nomes)    
})

app.listen(port, ()=>{
    console.log("Rodando na porta: " + port)
})