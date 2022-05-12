const express = require('express');

const router = express.Router();

const BookingModule = require('../module/hall-booking');

router.get('/getroomdetails', BookingModule.getroomdetails);
router.get('/getcustomerdata', BookingModule.getcustomerdata);
router.get('/getbookingstatus', BookingModule.getbookingstatus);
router.post('/postcustomerdetails', BookingModule.postcustomerdetails);
router.put('/updatecustomerdetails/:id', BookingModule.updatecustomerdetails);
router.delete('/deletecustomerdetails/:id', BookingModule.deletecustomerdetails);


module.exports = router;