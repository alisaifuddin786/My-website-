import PackageCard from '../components/PackageCard';
import { packages } from '../data';

function PackagesPage() {
  return (
    <section className="container section">
      <div className="section-header">
        <h2>Travel Packages</h2>
        <p>Browse our most loved destinations and reserve your spot today.</p>
      </div>
      <div className="card-grid">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}

export default PackagesPage;
