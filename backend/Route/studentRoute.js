const express = require("express");

const multer = require("multer")



const nodeModel = require("../model/nodeModel")
const router = express.Router() ;

const imageLocation=multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null, "studentImage")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const uploadImage =multer({
    storage:imageLocation
})






//creating new data

router.post("/register",uploadImage.single("image"),async(req,res) => {
    
const newData = nodeModel({
ID:req.body.ID,
  name:req.body.name,
  age:req.body.age,
  address:req.body.address,
  number:req.body.number,
  parentName:req.body.parentName,
  className:req.body.className,
  image:req.file.filename
});


const savedData = await newData.save();
res.send(savedData)
})


router.get("/students", async(req,res) =>{
    const getData = await nodeModel.find();
    res.send(getData)
  })
  

//delete by id

router.delete("/students/delete/:id", async(req,res)=>{
  const deleteData = await nodeModel.deleteOne({
    _id: req.params.id });
  res.send(deleteData)
})


router.put("/students/update/:id",async(req,res)=>{
  const updateData = await nodeModel.updateOne(
    {_id: req.params.id},
    {$set: req.body})
  res.send(updateData) 
})
/// get by id

router.get("/students/:id", async(req,res) =>{
  const getSingleData =  await nodeModel.find({_id: req.params.id})
  res.send(getSingleData)
})

/// seaching  student Api

router.get("/students/data/:key",async(req,res)=>{
  try{
    const searchStudent= await nodeModel.find({
      "$or": [
        {
          name: {$regex: req.params.key}
        },
      {
        ID: {$regex: req.params.key}
      }
      ]
    })
     res.send(searchStudent)
  }catch{(error)
    console.log(error)
  }
})

//// total student

router.get("/total",async(req,res)=>{
  const data = await nodeModel.find().countDocuments();
  res.send({data})
})

module.exports= router;