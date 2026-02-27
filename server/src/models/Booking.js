import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema(
  {
    packageId: {
      type: String,
      required: true,
      trim: true
    },
    packageName: {
      type: String,
      required: true,
      trim: true
    },
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    travelDate: {
      type: Date,
      required: true
    },
    travelers: {
      type: Number,
      required: true,
      min: 1
    },
    notes: {
      type: String,
      trim: true,
      default: ''
    }
  },
  { timestamps: true }
);

const Booking = mongoose.model('Booking', bookingSchema);

export default Booking;
