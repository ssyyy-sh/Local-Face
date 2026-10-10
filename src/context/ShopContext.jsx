import { createContext, useContext, useState } from 'react';

const ShopContext = createContext(null);

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]); // [{ id, size, qty }]
  const [wishlist, setWishlist] = useState([]); // [id]

  const addToCart = (id, size, qty = 1) =>
    setCart((prev) => {
      const found = prev.find((i) => i.id === id && i.size === size);
      if (found) return prev.map((i) => (i === found ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { id, size, qty }];
    });

  const toggleWishlist = (id) =>
    setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <ShopContext.Provider value={{ cart, wishlist, addToCart, toggleWishlist, cartCount }}>
      {children}
    </ShopContext.Provider>
  );
}

export const useShop = () => useContext(ShopContext);
