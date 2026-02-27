const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export async function submitBooking(formData) {
  const response = await fetch(`${API_BASE_URL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.message || 'Unable to submit booking.');
  }

  return payload;
}
