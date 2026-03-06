import { Link, useSearchParams } from 'react-router-dom';
import { tourPackages } from '../data';

function ToursPage() {
  const [searchParams] = useSearchParams();
  const search = (searchParams.get('search') || '').toLowerCase();

  const filteredTours = tourPackages.filter((pkg) => {
    if (!search) {
      return true;
    }

    return (
      pkg.title.toLowerCase().includes(search) ||
      pkg.location.toLowerCase().includes(search) ||
      pkg.highlights.some((item) => item.toLowerCase().includes(search))
    );
  });

  return (
    <section className="container section">
      <div className="section-header">
        <p className="eyebrow dark">Curated adventures</p>
        <h2>Tour Packages</h2>
        <p className="muted">Small-group tours, skip-the-line tickets, and city highlights in one place.</p>
      </div>

      <div className="card-grid">
        {filteredTours.map((pkg) => (
          <article className="card" key={pkg.id}>
            <img className="card-image" src={pkg.image} alt={pkg.title} />
            <div className="card-content">
              <p className="muted">{pkg.location}</p>
              <h3>{pkg.title}</h3>
              <ul className="pill-list">
                {pkg.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="card-meta">
                <span>{pkg.duration}</span>
                <strong>${pkg.price}</strong>
              </div>
              <div className="btn-row">
                <Link className="btn" to={`/booking?tour=${encodeURIComponent(pkg.title)}`}>
                  Reserve Seat
                </Link>
                <Link className="btn btn-secondary" to={`/booking?tour=${encodeURIComponent(pkg.title)}`}>
                  See Details
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      {!filteredTours.length && <p className="info-banner">No tours matched your search.</p>}
    </section>
  );
}

export default ToursPage;
