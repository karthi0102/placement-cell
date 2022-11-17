const mongoose=require('mongoose')
const {Schema}=mongoose

const userSchema = new Schema({
    name:String,
    rollno:String,
    phone:{
        type:Number,
        unique:true,
    },
    department:String,
    email:{
        type:String,
        unique:true,
    },
    image:String,
    batch:Number,
    cgpa:Number,
    history:Number,
    backlogs:Number,
    password:String,
    isAdmin:{
        type:Boolean,
        
    },
    joinedOn:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('User',userSchema)

