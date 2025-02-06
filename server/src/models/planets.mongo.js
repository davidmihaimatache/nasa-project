const mongoose = require("mongoose");

const planetsSchema = new mongoose.Schema({
  // keplerId: {
  //   type: Number,
  //   required: true,
  //   default: 1,
  // },
  keplerName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Planet", planetsSchema);
