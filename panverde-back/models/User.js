const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    unique: true,
    type: String
  },
  email: {
    required: true,
    unique: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  role: {
    type: String,
    enum: ['user',
    'admin'],    
    default: 'user'
  }
},
  { timestamps: true }
)

module.exports = mongoose.model("User", userSchema);