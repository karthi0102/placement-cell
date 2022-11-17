const Circular = require('../models/Circular');

module.exports.postCircular = async(req,res)=>{
     try {
        const {number,title,postedBy}=req.body
        const pdf='http://localhost:8080/'+req.file.path.substring(6);
        const Circular = new Circular({number,title,postedBy,pdf})
        await Circular.save();
        res.status(200).send("Success")
     } catch (error) {
        res.status(500).send(error.message)
     }
}


module.exports.getCirculars = async(req,res)=>{
    try {
        const circulars= await Circular.find({}).populate('postedBy');
        res.status(200).json(circulars)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports.deleteCircular = async(req,res)=>{
    const {id}=req.body
    try {
        await Circular.findByIdAndDelete(id)
        res.status(200).send("success")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports.updateCircular = async(req,res)=>{
    try {
         const {id}=req.params
         const post =await Post.findByIdAndUpdate(id,{...req.body});
         await post.save()
         res.status(200).send("Success")   
    } catch (error) {
        res.status(500).send(error.message)
    }
}