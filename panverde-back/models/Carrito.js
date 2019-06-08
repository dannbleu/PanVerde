const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carritoSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: User
  },
  
  total: {
    type: Number,
    default: 0
  },
  item: [{
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: Product
    },
    quantity: {
      type: Number
    },
    price: {
      type: Number,
      default: 0
    }
    
  }]
    
  
},
  { timestamps: true }
)

module.exports = mongoose.model("Carrito", carritoSchema);
