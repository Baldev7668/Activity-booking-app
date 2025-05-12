const express = require('express');
const router = express.Router();
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, bookActivity);
router.get('/me', authMiddleware, getMyBookings);

module.exports = router;
