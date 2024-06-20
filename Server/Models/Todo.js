const mongoose =require('mongoose')

const TodoSchema=new mongoose.Schema({
    task:String,
    done:{
        type:Boolean,
        default:false
    }
})

const TOdoModel=mongoose.model('todos',TodoSchema)
module.exports=TOdoModel