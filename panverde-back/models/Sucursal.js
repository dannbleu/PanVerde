const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sucursalSchema = new Schema ({
  name: String,
  position: {
      type: {
        type: String,
        default: "Point"
      },
      coordinates:[Number]
    }
  },
  { timestamps: true }
);

sucursalSchema.set('toObject')

sucursalSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Sucursal",sucursalSchema);