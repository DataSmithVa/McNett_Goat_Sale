const mongoose = require('mongoose');

const SoldLotSchema = mongoose.Schema({
  lotNumber: {
    type: Number,
    required: true,
  },
  bidderNumber: {
    type: Number,
    required: true,
  },
  salePrice: {
    type: String,
    required: true,
  },
  isPaid: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('soldLot', SoldLotSchema);
