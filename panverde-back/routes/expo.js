const express = require("express");
const router = express.Router();
const Expo = require("../models/Expo");

router.post('/create',(req,res,next)=>{

  let expo = req.body
  Expo.create(expo).then(expo=>{
    //helper para borrar datos
    //
    res.status(200).json({expo});
  }).catch(error => {
    error.action = "Error creating expo";
    next(error);
  });
})


router.get('/getAll',(req,res,next)=>{
  
  Expo.find().then(expo=>
    res.status(200).json({expo})
  ).catch(error => {
    error.action = "Error while find expo";
    next(error);
  });
})



router.patch('/:id/edit',(req,res, next)=>{
  let {id}= req.params
  let expo = req.body
  Expo.findByIdAndUpdate({ _id: id }, { $set: { ...expo } }, { new: true })
    .then(expo =>
    res.status(200).json({expo})
  ).catch(error => {
    error.action = "Error editing expo";
    next(error);
  });
})



module.exports = router;