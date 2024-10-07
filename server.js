const express = require ('express')
const server = express()
const bodyParser = require('body-parser')
//Importar para ter acesso ao caminho dos arquivos
const path = require('path')
//Expor arquivos estáticos..
server.use(express.static('public'))
server.use(express.json()) //Possibilidade de usar JSON

server.use(bodyParser.urlencoded({extended:true}))

server.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'views/index.html'))
})
server.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/registrar.html'))
 })
 server.get('/loja', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/loja/loja.html'))
 })
 server.get('/lista', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/lista/lista.html'))
 })
server.listen(3000, () => {
    console.log("servidor no ar...")
})
