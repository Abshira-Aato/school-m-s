const mongoose = require ("mongoose")

const classSchema = mongoose.Schema({
    className:{
        type: String,
        require:true,
    },
    classNum:{
        type: Number,
        require:true,
    },
    classTime:{
        type:String,
        require:true,
    } 
})

module.exports = mongoose.model("classes",classSchema)