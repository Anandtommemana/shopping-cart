// src/components/ProductCard.jsx
import { useState } from 'react';

export default function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? Number(prev) - 1 : 1));
  };

  const handleIncrement = () => {
    setQuantity((prev) => Number(prev) + 1);
  };

  const handleInputChange = (e) => {
    const val = e.target.value;
    if (val === '') {
      setQuantity('');
      return;
    }
    const parsed = parseInt(val, 10);
    if (!isNaN(parsed) && parsed >= 1) {
      setQuantity(parsed);
    }
  };

  const handleAdd = () => {
    const validQuantity = Number(quantity) >= 1 ? Number(quantity) : 1;
    addToCart(product, validQuantity);
    setQuantity(1);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1200);
  };

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title" title={product.title}>
          {product.title}
        </h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>

      <div className="product-actions">
        <div className="quantity-controls">
          <button
            type="button"
            className="qty-btn"
            onClick={handleDecrement}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <input
            type="number"
            min="1"
            className="qty-input"
            value={quantity}
            onChange={handleInputChange}
            aria-label="Product quantity"
          />
          <button
            type="button"
            className="qty-btn"
            onClick={handleIncrement}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          type="button"
          className={`add-to-cart-btn ${addedFeedback ? 'added' : ''}`}
          onClick={handleAdd}
        >
          {addedFeedback ? '✓ Added!' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
}