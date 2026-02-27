import { Link } from 'react-router-dom';

function PackageCard({ pkg }) {
  return (
    <article className="card">
      <img src={pkg.image} alt={pkg.title} className="card-image" />
      <div className="card-content">
        <p className="muted">{pkg.location}</p>
        <h3>{pkg.title}</h3>
        <p>{pkg.summary}</p>
        <div className="card-meta">
          <span>{pkg.duration}</span>
          <strong>${pkg.price}</strong>
        </div>
        <Link className="btn btn-secondary" to={`/packages/${pkg.id}`}>
          View details
        </Link>
      </div>
    </article>
  );
}

export default PackageCard;
