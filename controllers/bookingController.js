const Booking = require('../models/Booking');
const Activity = require('../models/Activity');

exports.bookActivity = async (req, res) => {
  try {
    const { activityId } = req.body;
    const activity = await Activity.findById(activityId);
    if (!activity) return res.status(404).json({ message: 'Activity not found' });

    const booking = await Booking.create({
      user: req.user.id,
      activity: activityId,
    });

    res.status(201).json({ message: 'Activity booked successfully', booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('activity');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
