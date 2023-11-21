const express = require('express');
const { createServer } = require("node:http");
const bodyParser = require('body-parser');
const conn = require('./config/dbC');
const userController = require('./controllers/userController')

const app = express();
const server = createServer(app);


server.listen(3000)

console.log('server en http://localhost:3000/')

app.disable('x-powered-by');

app.set('view engine','ejs');

app.use(express.static('views/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());


app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/v1/login',async(req,res)=>{
    const user = req.body.data.user
    const pass = req.body.data.pass

    const result = await userController.createtUsers(user,pass)

    console.log(result)

    res.status(201).json({ mensaje: 'Recurso creado con éxito' });
})


