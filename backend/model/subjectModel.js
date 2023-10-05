const mongoose = require ("mongoose")

const SubSchema = mongoose.Schema({
    subjectName:{
        type: String,
        require:true,
    },
    subjectCode:{
        type: Number,
        require:true,
    },
    subTeacher:{
        type:String,
        require:true,
    }
 
})

module.exports = mongoose.model("subjects",SubSchema)