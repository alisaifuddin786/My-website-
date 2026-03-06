import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

function BookingPage() {
  const [searchParams] = useSearchParams();

  const packageName = useMemo(() => {
    return searchParams.get('tour') || searchParams.get('hotel') || 'Flexible Travel Package';
  }, [searchParams]);

  return (
    <section className="container section booking-layout">
      <article className="details-card">
        <p className="eyebrow dark">Quick reservation</p>
        <h2>Complete your booking</h2>
        <p className="muted">
          Fill in traveler details to lock your preferred package. Our team will confirm availability in
          minutes.
        </p>
        <ul className="pill-list">
          <li>Instant request submission</li>
          <li>Transparent taxes and fees</li>
          <li>24/7 support before departure</li>
        </ul>
        <p className="info-banner">Selected: {packageName}</p>
      </article>
      <BookingForm packageName={packageName} packageId="custom-package" />
    </section>
  );
}

export default BookingPage;
