
const express = require("express");


const classModel = require("../model/classModel")
const router = express.Router() ;
///intsert 

router.post("/class/register",async(req,res)=>{
    const classdata = classModel(req.body)
    const result = await classdata.save();
    res.send(result)
  })


  ///get

router.get("/classes", async(req,res) =>{
    const getclass= await classModel.find();
    res.send(getclass)
  })

  ///delete by id

router.delete("/classes/delete/:id", async (req, res) => {
    const deleteClass = await classModel.deleteOne({
      _id: req.params.id,
    });
    res.send(deleteClass);
  })
  
///update


router.put("/classes/update/:id",async(req,res)=>{
    const updateClass = await classModel.updateOne(
      {_id: req.params.id},
      {$set: req.body})
    res.send(updateClass) 
  })
  /// get by id
  
  router.get("/classes/:id", async(req,res) =>{
    const getSingleClass =  await classModel.find({_id: req.params.id})
    res.send(getSingleClass)
  })



module.exports = router;