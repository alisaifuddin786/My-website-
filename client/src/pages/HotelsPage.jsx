import { Link, useSearchParams } from 'react-router-dom';
import { hotels } from '../data';

function HotelsPage() {
  const [searchParams] = useSearchParams();
  const city = (searchParams.get('city') || '').toLowerCase();

  const filteredHotels = hotels.filter((hotel) => {
    if (!city) {
      return true;
    }

    return hotel.location.toLowerCase().includes(city) || hotel.name.toLowerCase().includes(city);
  });

  return (
    <section className="container section">
      <div className="section-header">
        <p className="eyebrow dark">Top rated stays</p>
        <h2>Hotel Listings</h2>
        <p className="muted">Find verified hotels with flexible cancellation and instant confirmation.</p>
      </div>

      <div className="card-grid">
        {filteredHotels.map((hotel) => (
          <article className="card" key={hotel.id}>
            <img className="card-image" src={hotel.image} alt={hotel.name} />
            <div className="card-content">
              <h3>{hotel.name}</h3>
              <p className="muted">{hotel.location}</p>
              <p>⭐ {hotel.rating} rating</p>
              <ul className="pill-list">
                {hotel.amenities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="card-meta">
                <span>Per night</span>
                <strong>${hotel.pricePerNight}</strong>
              </div>
              <div className="btn-row">
                <Link className="btn" to={`/booking?hotel=${encodeURIComponent(hotel.name)}`}>
                  Book Hotel
                </Link>
                <button className="btn btn-secondary" type="button">
                  View Rooms
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      {!filteredHotels.length && <p className="info-banner">No hotels matched your selected city.</p>}
    </section>
  );
}

export default HotelsPage;
