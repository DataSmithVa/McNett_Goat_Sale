// Dependancies
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Model
const SoldLot = require('../models/SoldLot');

// Notes:

// To-Dos:

// @route   GET api/soldLot
// @desc    Get All Sold Lots
// @access  Public
router.get('/', async (req, res) => {
  try {
    const soldLot = await SoldLot.find(req.soldLot).sort({
      date: -1,
    });
    res.status(200).json(soldLot);
    console.log('GET all lot sales.');
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// @route   GET api/soldLot/:id
// @desc    Get a sold lots info
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const soldLot = await SoldLot.findById(req.params.id);
    if (!soldLot) return res.status(404).json({ msg: 'Lot Not Found!' });
    res.json(soldLot);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// @route   POST api/soldLot
// @desc    Submit a sold lots info
// @access  Public
router.post(
  '/',
  [
    check('lotNumber', 'Please add a lot number').not().isEmpty(),
    check('bidderNumber', 'Please add the bidder number').not().isEmpty(),
    check('salePrice', 'Please add the sale price').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { lotNumber, bidderNumber, salePrice, isPaid, paymentMethod, date } =
      req.body;

    try {
      let soldLot = await SoldLot.findOne({ lotNumber });

      if (soldLot) {
        res.status(400).json({ msg: 'Lot Sale already exists' });
        console.log('Failed to submit... Lot sale already exists!');
        return;
      }

      soldLot = new SoldLot({
        lotNumber,
        bidderNumber,
        salePrice,
        isPaid,
        paymentMethod,
        date,
      });

      await soldLot.save();

      const payload = {
        soldLot: {
          id: soldLot.id,
        },
      };

      if (soldLot) {
        res.status(200).json({ msg: 'Lot sale has been submitted!' });
        console.log('lot sale submitted. ');
      }
    } catch (err) {
      console.error(err.message);
      // Line below causes server to crash because express-validator already sent a response
      // res.status(500).send('Server Error');
    }
  }
);

// @route   PUT api/soldLot/:id
// @desc    Update a lot sale
// @access  Pubic
router.put('/:id', async (req, res) => {
  const { lotNumber, bidderNumber, salePrice, isPaid, paymentMethod } =
    req.body;
  // Build a lot sale object
  const soldLotFields = {};
  if (lotNumber) {
    soldLotFields.lotNumber = lotNumber;
  }
  if (bidderNumber) {
    soldLotFields.bidderNumber = bidderNumber;
  }
  if (salePrice) {
    soldLotFields.salePrice = salePrice;
  }
  if (isPaid) {
    soldLotFields.isPaid = isPaid;
  }
  if (paymentMethod) {
    soldLotFields.paymentMethod = paymentMethod;
  }
  try {
    let soldLot = await SoldLot.findById(req.params.id);
    if (!soldLot) return res.status(404).json({ msg: 'Lot Sale Not Found!' });
    soldLot = await SoldLot.findByIdAndUpdate(
      req.params.id,
      { $set: soldLotFields },
      { new: true }
    );
    res.status(200).json(soldLot);
    console.log('Lot sale has been updated.');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/soldLot/:id
// @desc    Delete a lot sale
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    let soldLot = await SoldLot.findById(req.params.id);
    if (!soldLot) return res.status(404).json({ msg: 'Lot Not Found!' });
    await SoldLot.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: 'Lot Sale Removed' });
    console.log('Lot sale removed!');
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
