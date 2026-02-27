import { useState } from 'react';
import { submitBooking } from '../api';

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  travelDate: '',
  travelers: 1,
  notes: ''
};

function BookingForm({ packageName, packageId }) {
  const [formState, setFormState] = useState(initialState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await submitBooking({
        ...formState,
        packageId,
        packageName,
        travelers: Number(formState.travelers)
      });
      setStatus({ type: 'success', message: 'Booking saved successfully. We will contact you shortly!' });
      setFormState(initialState);
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong.' });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Book this package</h3>
      <label>
        Full Name
        <input name="fullName" value={formState.fullName} onChange={handleChange} required />
      </label>
      <label>
        Email
        <input name="email" type="email" value={formState.email} onChange={handleChange} required />
      </label>
      <label>
        Phone
        <input name="phone" value={formState.phone} onChange={handleChange} required />
      </label>
      <div className="grid-2">
        <label>
          Travel Date
          <input name="travelDate" type="date" value={formState.travelDate} onChange={handleChange} required />
        </label>
        <label>
          Travelers
          <input
            name="travelers"
            type="number"
            min="1"
            value={formState.travelers}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <label>
        Notes (Optional)
        <textarea name="notes" value={formState.notes} onChange={handleChange} rows="3" />
      </label>
      <button className="btn" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
      </button>
      {status.message && <p className={`form-message ${status.type}`}>{status.message}</p>}
    </form>
  );
}

export default BookingForm;
