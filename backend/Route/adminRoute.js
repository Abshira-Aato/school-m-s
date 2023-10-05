
const express = require("express");


const adminModel = require("../model/adminModel")
const router = express.Router() ;


////insert

router.post("/admin",async(req,res)=>{
    const adminData = adminModel(req.body)
    const result = await adminData.save();
    res.send(result)
  })

/////verify

router.post("/admin/login",async(req,res)=>{
    if(req.body.username && req.body.password){
const admin = await adminModel.findOne(req.body)
if (admin){
    res.send(admin)
}
else{
    res.send("admin not found")
}
    }
    else{
        res.send("username and password required")
    }
})

  module.exports= router;