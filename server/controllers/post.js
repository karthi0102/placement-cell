const mongoose = require('mongoose')
const Post =require('../models/Post')

module.exports.getAllPosts =async(req,res)=>{
    try {
        const post = await Post.find({}).populate('postedBy')
        res.status(200).json(post)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.viewPost = async(req,res)=>{
    try {
        const {id}=req.parmas;
        const post=await Post.findById(id)
        res.status(200).json(post)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.newPost = async(req,res)=>{
    console.log(req.body)
    try {

        const post =new Post({...req.body});
     
        await post.save();
        res.status(200).json("success");
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports.deletePost = async(req,res)=>{
    try {
        const {id}=req.params;
        await Post.findByIdAndDelete(id);
        res.status(200).json("Success");
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error)
    }
}

module.exports.updatePost =async(req,res)=>{
    try {
        const {id}=req.parmas
        const post = await Post.findByIdAndUpdate(id,{...req.body});
        await post.save();
        res.status(200).send("success")
    } catch (err) {
        res.status(500).send(error)
    }
}