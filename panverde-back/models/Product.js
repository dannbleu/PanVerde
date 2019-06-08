const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number
  },
  images: {
    type: [String]
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  }
},
  { timestamps: true }
)

module.exports = mongoose.model("Product", productSchema);