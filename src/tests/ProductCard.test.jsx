// src/tests/ProductCard.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ProductCard from '../components/ProductCard';

const mockProduct = {
  id: 1,
  title: 'Minimalist Gold Necklace',
  price: 49.99,
  category: 'jewelery',
  image: 'https://fakestoreapi.com/img/test.jpg',
};

describe('ProductCard Component', () => {
  it('renders product details accurately', () => {
    render(<ProductCard product={mockProduct} addToCart={() => {}} />);
    expect(screen.getByText('Minimalist Gold Necklace')).toBeInTheDocument();
    expect(screen.getByText('$49.99')).toBeInTheDocument();
  });

  it('increments and decrements quantity when + and - buttons are clicked', async () => {
    const user = userEvent.setup();
    render(<ProductCard product={mockProduct} addToCart={() => {}} />);

    const input = screen.getByRole('spinbutton', { name: /product quantity/i });
    const incrementBtn = screen.getByRole('button', { name: /increase quantity/i });
    const decrementBtn = screen.getByRole('button', { name: /decrease quantity/i });

    expect(input.value).toBe('1');

    await user.click(incrementBtn);
    await user.click(incrementBtn);
    expect(input.value).toBe('3');

    await user.click(decrementBtn);
    expect(input.value).toBe('2');
  });

  it('calls addToCart with the right product and custom quantity', async () => {
    const user = userEvent.setup();
    const addToCartMock = vi.fn();
    render(<ProductCard product={mockProduct} addToCart={addToCartMock} />);

    const input = screen.getByRole('spinbutton', { name: /product quantity/i });
    const addButton = screen.getByRole('button', { name: /add to cart/i });

    await user.clear(input);
    await user.type(input, '4');
    await user.click(addButton);

    expect(addToCartMock).toHaveBeenCalledWith(mockProduct, 4);
  });
});