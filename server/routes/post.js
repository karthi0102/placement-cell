const express = require('express')
const router=express.Router()
const {getAllPosts,viewPost,newPost,deletePost,updatePost}=require('../controllers/post')

router.get('/',getAllPosts)
router.get('/:id',viewPost)
router.post('/',newPost)
router.delete('/:id',deletePost)
router.patch('/:id',updatePost)
module.exports=router