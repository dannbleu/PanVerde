const express = require("express");
const router = express.Router();
const Carrito = require("../models/Carrito");

router.post("/create", (req, res, next) => {
  
  console.log('pedido',req.body)
  Carrito.create({ ...req.body }).then(pedido => {
    console.log('pedido',pedido)
    res.status(200).json(pedido);
  })
  .catch(error => {
    error.action = "Error creating pedido";
    next(error);
  });
});

router.get("/getAll", (req, res, nexts) => {
  Carrito.find()
    .then(pedidos => 
      res.status(200).json({ pedidos }))
        .catch(error => {
          error.action = "Error finding pedidos";
          next(error);
        });
    });




router.patch('/:id/edit',(req,res, next)=>{
  let {id}= req.params
  let pedido = req.body
  Carrito.findByIdAndUpdate({ _id: id }, { $set: { ...pedido } }, { new: true })
    .then(pedido =>
    res.status(200).json({pedido})
  ).catch(error => {
    error.action = "Error editing pedido";
    next(error);
  });
})

router.delete("/:id/delete", (req,res) => {

  const {id} = req.params;

  Carrito.findByIdAndDelete(id)
  .then(pedido => {
    res.status(200).json({pedido})
  })
  .catch(error => {
    res.status(500).json({
      error,
      message: "Error al eliminar el pedidoo"
    })
  })
})


module.exports = router;