const express = require('express');
const router = express.Router();
const { listActivities ,createActivity} = require('../controllers/activityController');

router.post('/create', createActivity);
router.get('/', listActivities);


module.exports = router;
