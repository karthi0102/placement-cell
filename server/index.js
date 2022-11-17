const express = require('express')
const app = express()
const mongoose=require("mongoose")
const dotenv=require('dotenv')
dotenv.config()
const cors=require("cors")
const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const circularRoutes = require('./routes/circular')
const path = require('path')
const DATABASE_URL = process.env.DB
mongoose.connect(DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then( () => {
    console.log("Connection open")
}).catch(err => {
    console.log("OOPS !! ERROR",err.message)
})
app.use(express.static(path.join(__dirname, "/public")))
app.use(express.json({extended:true}))
app.use(express.urlencoded({ extended: true }));


app.use(cors())
app.use('/user',userRoutes)
app.use('/circular',circularRoutes)
app.use('/post',postRoutes)

app.get('/',(req,res)=>{
    res.send('PLACEMENT CELL WEBSITE')
})

const PORT = process.env.PORT || 8080
app.listen(8080,()=> console.log(`server is running on port ${PORT}`))