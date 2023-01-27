const express = require('express');
const UserModel = require('./user.model');

const app = express.Router();

app.get("/data",async(req,res)=>{
  try{
    const user=await new UserModel.find()
    res.send(user)
  }catch(e){
    res.send(e.message)
  }
})

app.post("/data",async(req,res)=>{
      try{
          const user= new UserModel(req.body)
          await user.save()
      }catch(e){
          res.send(e.message)
      }
})


module.exports=app;