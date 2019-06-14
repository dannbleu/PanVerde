const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const upload = require("../helpers/multer");

router.post("/create", upload.array("images"), (req, res, next) => {
  req.body.images = req.files.map(file => file.url);

  Product.create(req.body).then(product => {
    res.status(200).json(product);
  })
  .catch(error => {
    error.action = "Error creating product";
    next(error);
  });
});

router.get("/getAll", (req, res, nexts) => {
  Product.find()
    .then(products => {
      res.status(200).json({ products })
        .catch(error => {
          error.action = "Error finding products";
          next(error);
        });
    });
});



router.patch('/:id/edit/',(req,res, next)=>{
  let {id}= req.params
  let product = req.body
  Product.findByIdAndUpdate({ _id: id }, { $set: { ...product } }, { new: true })
    .then(product =>
    res.status(200).json({product})
  ).catch(error => {
    error.action = "Error editing product";
    next(error);
  });
})


module.exports = router;