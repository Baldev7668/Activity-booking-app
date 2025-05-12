const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const activityRoutes = require('./routes/activityRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const { errorHandler } = require('./middleware/errorMidlleware');
const app = express();

dotenv.config();
connectDB();

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
