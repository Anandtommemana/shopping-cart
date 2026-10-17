// src/pages/Cart.jsx
import { Link, useOutletContext } from 'react-router-dom';

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useOutletContext();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <section className="empty-cart">
        <h2>Your cart is currently empty</h2>
        <p>Looks like you haven&apos;t added anything to your cart yet.</p>
        <Link to="/shop" className="cta-button">
          Start Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-page">
      <h2>Your Shopping Cart</h2>

      <div className="cart-layout">
        <div className="cart-items-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-img" />

              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="cart-item-unit-price">${item.price.toFixed(2)} each</p>
              </div>

              <div className="quantity-controls">
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  aria-label="Decrease cart item quantity"
                >
                  −
                </button>
                <span className="cart-qty-display">{item.quantity}</span>
                <button
                  type="button"
                  className="qty-btn"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  aria-label="Increase cart item quantity"
                >
                  +
                </button>
              </div>

              <p className="cart-item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <aside className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="summary-row total">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <button
            type="button"
            className="checkout-btn"
            onClick={() => {
              alert('Order placed! Thank you for shopping at Medbestbuy.');
              clearCart();
            }}
          >
            Checkout
          </button>
        </aside>
      </div>
    </section>
  );
}