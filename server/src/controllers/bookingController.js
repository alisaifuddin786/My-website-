import Booking from '../models/Booking.js';

export async function createBooking(req, res, next) {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json({
      message: 'Booking submitted successfully',
      booking
    });
  } catch (error) {
    next(error);
  }
}
