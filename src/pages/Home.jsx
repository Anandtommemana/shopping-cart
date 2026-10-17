// src/pages/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="home-page">
      <div className="hero-banner">
        <span className="hero-tag">
Trusted Online B2B Platform for Quality Medical Devices
</span>
        <h1>Welcome to medbestbuy</h1>
        <p>
          Explore wide range of medical devices online.
        </p>
        <Link to="/shop" className="cta-button">
          Explore the Shop →
        </Link>
      </div>

      <div className="features-grid">
        <div className="feature-box">
          <h3>⚡ Instant Dispatch</h3>
          <p>Orders ship within 24 hours directly to your doorstep.</p>
        </div>
        <div className="feature-box">
          <h3>🛡️ Quality Guaranteed</h3>
          <p>Every item is verified for durability and premium finish.</p>
        </div>
        <div className="feature-box">
          <h3>🔄 30-Day Returns</h3>
          <p> Send it back anytime within 30 days.</p>
        </div>
      </div>
    </section>
  );
}