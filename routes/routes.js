const express =require("express");
let router = express.Router();
const setfirebase = require("../firebase/setData")
const getData= require("../firebase/getData")
const dataByid= require("../firebase/dataById")
const deleteData = require("../firebase/deleteData")
const updateData = require("../firebase/updateData")

router 
//aqui estamos passando os dados pro db
  .route("/")
  .post((req,res)=>{
     setfirebase.saveData(req.body)
      res.send({"status":"200","message":"success"})
      
    })

  // buscando todos os appointments
  .get((req,res)=>{
    getData._getData(function(data){
      res.send(data);
    });
 });

 router
 //buscando um appoinment pelo id
  .route("/:id")
  .get((req,res)=>{
    dataByid._databyid((data)=>{
     let user = data[req.params.id]
     if(!user){
      res.sendStatus(404)
     }
      res.send(user)
    })
  })

  // remover um appoinment pelo id
  .delete((req,res)=>{
    deleteData._deleteUserData(function(data){
      res.send({"status":"200","message":"remove successfully"})
    },req.params.id)
  });
  router
  // update do {state}
  .route("/state")
  .post((req,res)=>{
    updateData._updateData(req.body)
      res.send({"status":"200","message":"state update"})
    });

 module.exports = router;

