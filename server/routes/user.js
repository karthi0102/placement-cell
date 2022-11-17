
const {login,signUp,getAll,myDetails,editDetails}=require('../controllers/user')
const express=require('express')
const { storage, fileFilter } = require("../multer/profile")
const multer = require('multer');
const upload = multer({ limits: { fileSize: 2097152 }, fileFilter: fileFilter, storage: storage })
const router=express.Router()

router.post('/login',login)
router.post('/signup',upload.single('photo'),signUp)
router.get('/',getAll)
router.get('/:id',myDetails)
router.patch('/:id',editDetails)

module.exports=router