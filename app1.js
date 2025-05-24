const express = require('express');
const app = express()
const port = 3030
const mongoose = require('mongoose');

app.get('/', (req, res) => {
    res.sendFile('./views/home.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

mongoose
    .connect('mongodb+srv://<db_username>:ahmedmousa@cluster0.stq4muw.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
    app.listen(port, () => {
    console.log(`http://localhost:${port}`)
        })
    })
    .catch((err) => {
         console.log(err)
    })
    