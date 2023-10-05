const mongoose = require ("mongoose");

const noteSchema = new mongoose.Schema({
    ID:{
        type: String,
        required: true
      },
  name:{
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  },
  
  address:{
    type: String,
    required: true
  },
  number:{
    type: Number,
    required: true
  },
  parentName:{
    type: String,
    required: true
  },
  className:{
    type: String,
    required: true
  },
  image:{
    type:String,
    require:true
}

})

module.exports = mongoose.model("students", noteSchema)


