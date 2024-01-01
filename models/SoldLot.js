const mongoose = require('mongoose');

const SoldLotSchema = mongoose.Schema({
  lotNumber: {
    type: String,
    required: true,
  },
  bidderNumber: {
    type: String,
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
  paymentMethod: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('soldLot', SoldLotSchema);
