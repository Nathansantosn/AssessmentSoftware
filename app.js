const express = require('express')
const session = require('express-session')
const app = express()
const User = require('./src/models/User')
const port = 3000

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: 'Assessment',
    resave: false,
    saveUninitialized:true,
    cookie: { secure: false}
}))

function isAuthenticated(req,res,next){
    if(req.session.user){
        return next();
    }else{
        res.redirect('/')
    }git 
}

app.get('/User/lista', async (req, res) => {
    try {
        const user = await User.findAll();
        res.status(200).json(pessoas)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/forms', isAuthenticated ,(req,res)=>{
    console.log("Rota de Forms")
    res.render('forms')
})

app.get('/', async (req, res) => {
    try {
        const user = await User.findAll();
        res.render('index', {user:user})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.get('/check-auth', (req,res)=>{
    if(req.session.user){
        res.json({loggedIn: true})
    } else {
        res.json({loggedIn: false})
    }
})

app.post('/login',(req,res)=>{
    const { username, password } = req.body
    console.log('username', username)
    console.log('senha', password)

    if(username === 'admin'&& password === 'senha'){
        console.log("Login Realizado com sucesso!")
        req.session.user = {username}
        res.status(200).json({ "success": true })
    }else{
        res.json({success:false, message: 'Credenciais inválidas'})
    }
})


app.post('/User/cadastrar', async (req, res) => {
    const { nome, idade, descricao, avatar } = req.body
    try {
        const pessoa = await Pessoa.create({ nome, idade, descricao, avatar })
        res.redirect('/')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.put('/User/editar/:id', async (req, res) => {
    const { id } = req.params
    const { nome, idade, descricao, avatar } = req.body
    try {
        const user = await User.findByPk(id)
        if(!pessoa){
            res.status(404).json({status:false , messagem:"Pessoa não encontrada"})
        }
        pessoa.nome = nome
        pessoa.idade=idade
        pessoa.descricao = descricao
        pessoa.avatar = avatar
        pessoa.save()
        res.status(200).json({ status:true , message:"Pessoa alterada com sucesso"})

    } catch (error) {
        res.status(500).json({ status:false ,message: error.message })
    }
})

app.listen(port, () => {
    console.log(`Servidor funciona em http://localhost:${port}`)
})

/**const express = require('express');
const session = require('express-session');
const path = require('path');
const authRoutes = require('./src/routes/authRoutes');
const pessoaRoutes = require('./src/routes/pessoaRoutes');
const authMiddleware = require('./src/middlewares/authMiddleware');

const app = express();
const port = 3000;

// Configurações
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'turma-88419',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Rotas
app.use('/auth', authRoutes);
app.use('/pessoa', pessoaRoutes);

app.get('/', async (req, res) => {
  const pessoas = await Pessoa.findAll();
  res.render('index', { pessoas });
});

app.get('/forms', authMiddleware.isAuthenticated, (req, res) => {
  res.render('forms');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
}); */