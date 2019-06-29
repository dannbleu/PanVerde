const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carritoSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: 'Proporciona una Fecha de entrega'
  },
  item: [{
    _id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Product"
    },
    quantity: {
      type: Number,
    }    
  }]
    
  
},
  { timestamps: true }
)

module.exports = mongoose.model("Carrito", carritoSchema);
