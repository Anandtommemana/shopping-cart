// src/pages/Shop.jsx
import { useOutletContext } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const { products, loading, error, addToCart } = useOutletContext();

  if (loading) {
    return <div className="status-message">Loading store catalog...</div>;
  }

  if (error) {
    return <div className="status-message error">Error: {error}</div>;
  }

  return (
    <section className="shop-page">
      <div className="shop-header">
        <h2>All Products</h2>
        <p>Showing {products.length} items from FakeStore API</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}