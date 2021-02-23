const express = require("express");
let routers = express.Router();
const jwt = require('jsonwebtoken')
const SECRET = 'gustavo'

routers
//rota de login com valores fixos para autenticacao
.route("/")
.post((req,res)=>{
  if(req.body.user ==='gustavo' && req.body.password ==='123'){
    const id = 1
    const token = jwt.sign({id} , SECRET , {expiresIn: 300})
     
    return res.json({auth:true, token});
  }
  res.status(401).end();
})

module.exports = routers;