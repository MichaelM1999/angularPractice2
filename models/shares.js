const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  stock_name: { type: String, required: true },
  owner: {type: String, required: true},
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;