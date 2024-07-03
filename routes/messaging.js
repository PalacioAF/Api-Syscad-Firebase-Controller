//Messaging Route
const express=require('express');
const router=express.Router();
const messagingController=require('../controllers/messagingController')

//Send
router.post('/',messagingController.send);

module.exports=router;