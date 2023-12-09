// Dependancies
const express = require('express');
const router = express.Router();

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
    console.log(req.status);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

// TODO everything below this line
// @route   GET api/troubleTickets/:id
// @desc    Get a Trouble Ticket
// @access  Private
router.get('/:id', auth, async (req, res) => {
  if (req.user.role === 'admin' || req.user.role === 'employee') {
    try {
      const troubleTicket = await Trouble.findById(req.params.id);
      if (!troubleTicket)
        return res.status(404).json({ msg: 'Ticket Not Found!' });
      res.json(troubleTicket);
      console.log(`${req.user.name} has accessed trouble ticket database.`);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server Error' });
    }
  } else {
    res.status(403).json({ msg: 'Not Authorized...' });
    console.log(
      `${req.user.name} tried to access trouble ticket: ${req.params.id}.`
    );
  }
});

// @route   POST api/troubleTickets
// @desc    Submit a Trouble Ticket
// @access  Public
router.post(
  '/',
  [
    check('firstName', 'Please add a first name').not().isEmpty(),
    check('lastName', 'Please add a last name').not().isEmpty(),
    check('address', 'Please add a valid address').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('contact', 'Please add a contact number').not().isEmpty(),
    check('notes', 'Please add a description of your issue').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, address, email, contact, notes } = req.body;

    try {
      let troubleTicket = await Trouble.findOne({ email });

      if (troubleTicket) {
        res.status(400).json({ msg: 'Application already exists' });
      }

      troubleTicket = new Trouble({
        firstName,
        lastName,
        address,
        email,
        contact,
        notes,
      });

      await troubleTicket.save();

      const payload = {
        troubleTicket: {
          id: troubleTicket.id,
        },
      };

      if (troubleTicket) {
        res.status(200).json({ msg: 'Trouble Ticket has been submitted!' });
        console.log('Trouble ticket submitted. ');
      }
    } catch (err) {
      console.error(err.message);
      // Line below causes server to crash because express-validator already sent a response
      // res.status(500).send('Server Error');
    }
  }
);

// @route   DELETE api/troubleTicket/:id
// @desc    Delete a Trouble Ticket
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  if (req.user.role === 'admin' || req.user.role === 'employee') {
    try {
      let troubleTicket = await Trouble.findById(req.params.id);
      if (!troubleTicket)
        return res.status(404).json({ msg: 'TroubleTicket Not Found!' });
      await Trouble.findByIdAndRemove(req.params.id);
      res.json({ msg: 'Trouble Ticket Removed' });
      console.log(
        `${req.user.name} removed trouble ticket for ${troubleTicket.firstName} ${troubleTicket.lastName}.`
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: 'Server Error' });
    }
  } else {
    res.status(403).json({ msg: 'Not Authorized!' });
    console.log(
      `${req.user.name} tried to delete trouble ticket: ${req.params.id}.`
    );
  }
});

module.exports = router;
