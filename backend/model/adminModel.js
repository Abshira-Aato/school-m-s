const mongoose = require ("mongoose")

const adminModel = mongoose.Schema({
    username:{
        type: String,
        require:true,
    },
    password:{
        type: String,
        require:true,
    }
  
})

module.exports = mongoose.model("admins",adminModel)