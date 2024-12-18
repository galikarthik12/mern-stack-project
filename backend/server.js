const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = 'mongodb://127.0.0.1:27017/bookingApp';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });

// Booking Schema
const bookingSchema = new mongoose.Schema({
    checkinDate: { type: Date, required: true },
    checkoutDate: { type: Date, required: true },
    roomType: { type: String, required: true, enum: ['single', 'double', 'suite'] },
    guests: { type: Number, required: true },
    rate: { type: Number, required: true },
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);

// API Endpoint to Save Bookings
app.post('/api/bookings', async (req, res) => {
    try {
        const { checkinDate, checkoutDate, roomType, guests, rate } = req.body;

        // Input Validation
        if (!checkinDate || !checkoutDate || !roomType || !guests || !rate) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Save Booking
        const newBooking = new Booking({ checkinDate, checkoutDate, roomType, guests, rate });
        const savedBooking = await newBooking.save();

        res.status(201).json(savedBooking);
    } catch (error) {
        console.error('Error saving booking:', error.message);
        res.status(500).json({ error: 'Server Error' });
    }
});

// Serve Static React Frontend (Optional, if React Build Exists)
app.use(express.static(path.join(__dirname, 'frontend/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
