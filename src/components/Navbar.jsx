// src/components/Navbar.jsx
import { NavLink, Link } from 'react-router-dom';

export default function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="brand-logo">
          MB<span>B</span>
        </Link>

        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            Shop
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? 'nav-item cart-link active' : 'nav-item cart-link'
            }
          >
            <span>Cart</span>
            <span className="cart-badge" data-testid="cart-badge">
              {cartCount}
            </span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}