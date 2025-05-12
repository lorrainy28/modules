const express = require('express')

let curso = "Programador de Back-end "

const app=express()

// Rota Principal

app.get('/',(req, res) => {
    res.send('Servidor Express funcionando!!');
})
// Rota nova: / sobre
app.get('/senai',(req, res) => {
    res.send('Programador de Back-end ');
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})



