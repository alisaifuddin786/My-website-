import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">Your next adventure starts here</p>
          <h2>Discover unforgettable destinations around the world.</h2>
          <p>
            Plan trips with curated packages, transparent pricing, and a smooth booking experience.
          </p>
          <Link className="btn" to="/packages">
            Explore packages
          </Link>
        </div>
      </section>

      <section className="container section">
        <h3>Why book with WanderNest?</h3>
        <div className="feature-grid">
          <article>
            <h4>Handpicked Packages</h4>
            <p>Carefully designed itineraries for every travel style.</p>
          </article>
          <article>
            <h4>Trusted Support</h4>
            <p>Fast help from our team before, during, and after your trip.</p>
          </article>
          <article>
            <h4>Flexible Planning</h4>
            <p>Book quickly now and finalize details later with our advisors.</p>
          </article>
        </div>
      </section>
    </>
  );
}

export default HomePage;
