const express = require("express");

const router = express.Router() ;

const subjectModel = require("../Route/classRoute")

///inset
router.post("/subject/register",async(req,res)=>{
    const subjectData = subjectModel(req.body)
    const result = await subjectData.save();
    res.send(result)
  })


  
///get

router.get("/subjects", async(req,res) =>{
    const getSubject= await subjectModel.find();
    res.send(getSubject)
  })



  ///delete by id

router.delete("/subjects/delete/:id", async (req, res) => {
    const deleteSubject = await subjectModel.deleteOne({
      _id: req.params.id,
    });
    res.send(deleteSubject);
  })


  ///update


router.put("/subjects/update/:id",async(req,res)=>{
    const updateSubject = await subjectModel.updateOne(
      {_id: req.params.id},
      {$set: req.body})
    res.send(updateSubject) 
  })

  
/// get by id

router.get("/subjects/:id", async(req,res) =>{
    const getSingleSubject =  await subjectModel.find({_id: req.params.id})
    res.send(getSingleSubject)
  })



  /// seaching  subject Api

router.get("/subjects/data/:key",async(req,res)=>{
    try{
      const searchSub= await subjectModel.find({
        "$or": [
          {
            subjectName: {$regex: req.params.key}
          },
        {
          subTeacher: {$regex: req.params.key}
        }
        ]
      })
       res.send(searchSub)
    }catch{(error)
      console.log(error)
    }
  })
  
  module.exports = router;