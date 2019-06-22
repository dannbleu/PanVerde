const express = require("express");
const router = express.Router();
const Sucursal = require("../models/Sucursal");

router.post("/create", (req, res, next) => {

  Sucursal.create(req.body).then(sucursal => {
    res.status(200).json(sucursal);
  })
  .catch(error => {
    error.action = "Error creating product";
    next(error);
   console.log(error)
  });
});

router.get("/getAll", (req, res, nexts) => {
  Sucursal.find()
    .then(sucursales => {
      res.status(200).json({ sucursales })
        .catch(error => {
          error.action = "Error finding products";
          next(error);
        });
    });
});



router.patch('/:id/edit/',(req,res, next)=>{
  let {id}= req.params
  let sucursal = req.body
  Sucursal.findByIdAndUpdate({ _id: id }, { $set: { ...sucursal } }, { new: true })
    .then(sucursal =>
    res.status(200).json({sucursal})
  ).catch(error => {
    error.action = "Error editing product";
    next(error);
  });
})


module.exports = router;