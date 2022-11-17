const mongoose=require('mongoose')
const {Schema}=mongoose

const circularSchema = new Schema({
            number:{
                type:String,
                unique:true,
                required:true
            },
            title:{
                type:String,
                require:true,
            },
            pdf:{
                type:String,
            },
            postedOn:{
                type:Date,
                default:Date.now
            },
            postedBy:{
                type:Schema.Types.ObjectId,
                ref:'User'
            }

});

module.exports = mongoose.model('Circular',circularSchema)