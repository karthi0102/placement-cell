const mongoose = require('mongoose')
const {Schema}=mongoose

const postSchema =({
    title:String,
    description:String,
    postedBy:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    postedOn:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('Post',postSchema)