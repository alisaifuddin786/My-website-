import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { categories, destinations, tourPackages } from '../data';

function HomePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState('');

  const featuredTours = useMemo(() => tourPackages.slice(0, 3), []);

  function handleCategoryClick(categoryId) {
    if (categoryId === 'hotels') {
      navigate('/hotels');
      return;
    }

    if (categoryId === 'tours' || categoryId === 'tickets') {
      navigate('/tours');
      return;
    }

    if (categoryId === 'all') {
      navigate('/tours');
      return;
    }

    setMessage('Transport and car modules will be available in the next update.');
  }

  function handleSearch() {
    const query = searchTerm.trim();
    if (!query) {
      setMessage('Please enter a destination or activity to search.');
      return;
    }

    navigate(`/tours?search=${encodeURIComponent(query)}`);
  }

  function handleWishlist(title) {
    setMessage(`${title} added to wishlist.`);
  }

  return (
    <>
      <section className="hero-home">
        <div className="container">
          <div className="hero-toolbar">
            <button className="icon-btn" type="button" aria-label="Open menu" onClick={() => setMessage('Main menu opened.')}>
              ☰
            </button>
            <div className="brand-wrap">
              <span className="brand-mark">✦</span>
              <h1>TripNova</h1>
            </div>
            <div className="hero-actions">
              <button className="icon-btn" type="button" aria-label="Search" onClick={handleSearch}>
                🔍
              </button>
              <button className="icon-btn" type="button" aria-label="Cart" onClick={() => navigate('/booking')}>
                🛒
              </button>
              <button className="icon-btn" type="button" aria-label="Account" onClick={() => navigate('/admin')}>
                👤
              </button>
            </div>
          </div>

          <div className="search-box">
            <span>🔎</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search destinations, hotels, activities"
            />
            <button className="btn" type="button" onClick={handleSearch}>
              Search
            </button>
          </div>

          <div className="quick-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                className="category-chip"
                type="button"
                onClick={() => handleCategoryClick(category.id)}
              >
                <span>{category.icon}</span>
                <small>{category.label}</small>
              </button>
            ))}
          </div>
          {message && <p className="info-banner">{message}</p>}
        </div>
      </section>

      <section className="container section">
        <div className="promo-banner">
          <div>
            <p className="eyebrow">Spring into joy</p>
            <h2>Get up to 60% off selected tours and city hotels.</h2>
            <p>Limited-time flash deals on family stays, transfers, and curated experiences.</p>
          </div>
          <div className="promo-actions">
            <Link className="btn" to="/tours">
              Grab Deals
            </Link>
            <Link className="btn btn-light" to="/hotels">
              Book Hotels
            </Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-head-row">
          <h3>Where to next?</h3>
          <Link className="link-btn" to="/hotels">
            See more
          </Link>
        </div>
        <div className="card-grid three-col">
          {destinations.map((item) => (
            <article className="card destination-card" key={item.id}>
              <img className="card-image" src={item.image} alt={item.name} />
              <div className="card-content">
                <h4>{item.name}</h4>
                <p className="muted">{item.country}</p>
                <Link className="btn btn-secondary" to={`/hotels?city=${encodeURIComponent(item.name)}`}>
                  Explore {item.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <div className="section-head-row">
          <h3>Trending tours</h3>
          <Link className="link-btn" to="/tours">
            View all tours
          </Link>
        </div>
        <div className="card-grid">
          {featuredTours.map((tour) => (
            <article className="card" key={tour.id}>
              <img className="card-image" src={tour.image} alt={tour.title} />
              <div className="card-content">
                <p className="muted">{tour.location}</p>
                <h4>{tour.title}</h4>
                <div className="card-meta">
                  <span>{tour.duration}</span>
                  <strong>${tour.price}</strong>
                </div>
                <div className="btn-row">
                  <Link className="btn btn-secondary" to={`/booking?tour=${encodeURIComponent(tour.title)}`}>
                    Book Now
                  </Link>
                  <button className="btn" type="button" onClick={() => handleWishlist(tour.title)}>
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
