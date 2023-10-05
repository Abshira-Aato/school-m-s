const mongoose = require("mongoose")

const teacerSchema = mongoose.Schema({
    name:{
        type: String,
        require:true,
    },
    title:{
        type: String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
      salary:{
        type: Number,
        require:true,
    },
    number:{
        type:String,
        require:true,
    }
   
})

module.exports = mongoose.model("teachers",teacerSchema)