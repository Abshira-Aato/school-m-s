const express = require("express");
const cors = require("cors")

const mongoose = require("mongoose");
const ClassRoute = require("./Route/classRoute")
const SubjectRoute =require("./Route/subjectRoute")
const adminRoute = require("./Route/adminRoute")
const studntRoute =require("./Route/studentRoute")
const app = express();

app.use(cors())
app.use(express.json ()) 


mongoose.connect("mongodb://0.0.0.0:27017/noteProject").then(()=>{

console.log("Connected to MongoDB database!");

}).catch((error)=> {

  console.log("error");
})



// const nodeModel = require("./model/nodeModel")

// //creating new data

// app.post("/register", async(req,res) => {
    
// const newData = nodeModel({
// ID:req.body.ID,
//   name:req.body.name,
//   age:req.body.age,
//   address:req.body.address,
//   number:req.body.number,
//   parentName:req.body.parentName,
//   className:req.body.className
// });


// const savedData = await newData.save();
// res.send(savedData)
// })


// app.get("/students", async(req,res) =>{
//     const getData = await nodeModel.find();
//     res.send(getData)
//   })
  

// //delete by id

// app.delete("/students/delete/:id", async(req,res)=>{
//   const deleteData = await nodeModel.deleteOne({
//     _id: req.params.id });
//   res.send(deleteData)
// })


// app.put("/students/update/:id",async(req,res)=>{
//   const updateData = await nodeModel.updateOne(
//     {_id: req.params.id},
//     {$set: req.body})
//   res.send(updateData) 
// })
// /// get by id

// app.get("/students/:id", async(req,res) =>{
//   const getSingleData =  await nodeModel.find({_id: req.params.id})
//   res.send(getSingleData)
// })

// /// seaching  student Api

// app.get("/students/data/:key",async(req,res)=>{
//   try{
//     const searchStudent= await nodeModel.find({
//       "$or": [
//         {
//           name: {$regex: req.params.key}
//         },
//       {
//         ID: {$regex: req.params.key}
//       }
//       ]
//     })
//      res.send(searchStudent)
//   }catch{(error)
//     console.log(error)
//   }
// })

// //// total student

// app.get("/total",async(req,res)=>{
//   const data = await nodeModel.find().countDocuments();
//   res.send({data})
// })







/////teachers


const teacherModel = require("./model/teacherModel")

app.post("/teacher/register",async(req,res)=>{
  const teacherdata = teacherModel(req.body)
  const result = await teacherdata.save();
  res.send(result)
})
//// get teacher


app.get("/teachers", async(req,res) =>{
  const getTeacher= await teacherModel.find();
  res.send(getTeacher)
})

///delete
app.delete("/teachers/delete/:id", async (req, res) => {
  const deleteTeachers = await teacherModel.deleteOne({
    _id: req.params.id,
  });
  res.send(deleteTeachers);
})


///update


app.put("/teachers/update/:id",async(req,res)=>{
  const updateTeacher = await teacherModel.updateOne(
    {_id: req.params.id},
    {$set: req.body})
  res.send(updateTeacher) 
})
/// get by id

app.get("/teachers/:id", async(req,res) =>{
  const getSingleTeacher =  await teacherModel.find({_id: req.params.id})
  res.send(getSingleTeacher)
})

//// total teacher

app.get("/totalTeachers",async(req,res)=>{
  const data = await teacherModel.find().countDocuments();
  res.send({data})
})


////total money teachers

app.get("/teacher/salary",async(req,res)=>{
  const totalSalary = await teacherModel.aggregate([
    {
      $group:{_id: null, total:{$sum: "$salary"}}
    }
  ])
  res.send({totalSalary})
})













////////////////////////////////////////////////////////////////////////////subject


const subjectModel = require("./model/subjectModel")

app.post("/subject/register",async(req,res)=>{
  const subjectData = subjectModel(req.body)
  const result = await subjectData.save();
  res.send(result)
})

///get

app.get("/subjects", async(req,res) =>{
  const getSubject= await subjectModel.find();
  res.send(getSubject)
})
///delete by id

app.delete("/subjects/delete/:id", async (req, res) => {
  const deleteSubject = await subjectModel.deleteOne({
    _id: req.params.id,
  });
  res.send(deleteSubject);
})

///update


app.put("/subjects/update/:id",async(req,res)=>{
  const updateSubject = await subjectModel.updateOne(
    {_id: req.params.id},
    {$set: req.body})
  res.send(updateSubject) 
})
/// get by id

app.get("/subjects/:id", async(req,res) =>{
  const getSingleSubject =  await subjectModel.find({_id: req.params.id})
  res.send(getSingleSubject)
})


/// seaching  subject Api

app.get("/subjects/data/:key",async(req,res)=>{
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

/////making image in public
app.use("/images",express.static("studentImage"))

app.use (ClassRoute);
app.use (SubjectRoute);
app.use (adminRoute);
app.use(studntRoute);

app.listen(3001, ()=> {

    console.log("server is runing on port 3001") 
  })
  
  