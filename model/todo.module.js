const mongoose=require("mongoose")


const TODOSchema=mongoose.Schema({
    taskname:String,
    status:Boolean,
    tag:String,
    TodoID:String,

})

const TODOModel=mongoose.model("todos",TODOSchema)

module.exports={TODOModel}