const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expoSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  start: {
    type: Date,
    default: Date.now,
    required: 'Must have start date - default value is the created date'
  },
  end: {
    type: Date,
    default: new Date(+new Date() + 30*24*60*60*1000), // Date in one week from now
    required: 'Must have end date - default value is the created date + 1 month'
  }
},
  { timestamps: true }
)

module.exports = mongoose.model("Expo", expoSchema);