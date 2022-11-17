
const {postCircular,getCirculars,deleteCircular, updateCircular}=require('../controllers/circular')
const express=require('express')
const { storage, fileFilter } = require("../multer/upload")
const multer = require('multer');
const upload = multer({ limits: { fileSize: 2097152 }, fileFilter: fileFilter, storage: storage })
const router=express.Router()
router.post('/',upload.single('pdf'),postCircular)
router.get('/',getCirculars)
router.delete('/',deleteCircular)
router.patch('/',updateCircular)

module.exports=router