const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const receitas = require("./data")
const receitas_index = require("./data_index")

server.use(express.static("public"))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape:false,
    noCache:true
})

// criando rotas 
//rota index
server.get("/", function (req, res) {
    server.use(function (req,res) {
        res.status(404).send("Erro 404 - página não encontrada!")
    })

    return res.render("index", {items: receitas_index})
})

//rota receitas
server.get("/receitas", function (req, res) {
    server.use(function (req,res) {
        res.status(404).send("Erro 404 - página não encontrada!")
    })

    return res.render("receitas", {items: receitas})
})

//rota sobre
server.get("/sobre", function (req, res) {
    server.use(function (req,res) {
        res.status(404).send("Erro 404 - página não encontrada!")
    })

    return res.render("sobre")
})

//rota páginas
server.get("/pagina-receita", function (req, res) {
    server.use(function(req, res) {
        res.status(404).render("not-found")
    })  
    const id = req.query.id

    const receita = receitas.find(function (receita) {
        return receita.id == id
    }) 

    if (!receita) {
        return res.render("not-found")
    }

    return res.render("pagina-receita", {item: receita})
})

// rodando servidor
server.listen(5000, function () {
    console.log("O servidor está rodando")
})