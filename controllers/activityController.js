const Activity = require('../models/Activity');


exports.createActivity = async (req, res) => {
  const { title, description, location, dateTime } = req.body;

  try {
    const newActivity = new Activity({
      title,
      description,
      location,
      dateTime
    });

    await newActivity.save();
    res.status(201).json(newActivity);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating activity' });
  }
};


exports.listActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
