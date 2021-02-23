
//chamada dos pacotes 
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.port||8081;
const router = require ("./routes/routes");
var auth = require("./auth/auth");
const routers = require("./routes/login");

//retorno de dados a partir do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//rota prefixada
app.use('/appointments',auth, router)
//rota para a autenticacao
app.use('/login' , routers)


app.listen(port,function(err,data){
  if(err)
  console.log (err);
  else
  console.log("connected");
});


