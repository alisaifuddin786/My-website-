import { Link, useParams } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { packages } from '../data';

function PackageDetailsPage() {
  const { packageId } = useParams();
  const selectedPackage = packages.find((pkg) => pkg.id === packageId);

  if (!selectedPackage) {
    return (
      <section className="container section">
        <h2>Package not found</h2>
        <Link to="/packages" className="btn btn-secondary">
          Back to packages
        </Link>
      </section>
    );
  }

  return (
    <section className="container section details-layout">
      <article className="details-card">
        <img src={selectedPackage.image} alt={selectedPackage.title} className="details-image" />
        <p className="muted">{selectedPackage.location}</p>
        <h2>{selectedPackage.title}</h2>
        <p>{selectedPackage.summary}</p>
        <div className="card-meta">
          <span>{selectedPackage.duration}</span>
          <strong>${selectedPackage.price}</strong>
        </div>

        <h3>Highlights</h3>
        <ul>
          {selectedPackage.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3>Itinerary</h3>
        <ul>
          {selectedPackage.itinerary.map((day) => (
            <li key={day}>{day}</li>
          ))}
        </ul>
      </article>

      <BookingForm packageName={selectedPackage.title} packageId={selectedPackage.id} />
    </section>
  );
}

export default PackageDetailsPage;
