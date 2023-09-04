const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./connection');
const response = require('./response');


app.use(bodyParser.json());
app.get('/', (req,res) => {
    const sql = "SELECT * FROM MAHASISWA";
    db.query(sql, (error, result) => {
        //hasil dari mysql
        response(200, result, 'Get all data from mahasiswa', res);
    });
});

app.get('/find', (req,res) => {
    const sql = `SELECT Nama FROM mahasiswa WHERE NIM = ${req.query.nim}`
    db.query(sql,(error,result) => {
        response(200,result, 'find mahasiswa name', res );
    });
});

app.post('/login', (req,res) => {
    console.log({requestFromOutSide:req.body});
    res.send("Login Berhasil");
});

app.post('/update', (req,res) => {
    res.send('Update Berhasil');
});

app.listen(port, (req,res) => {
    console.log(`Server running on port : ${port}`);
});