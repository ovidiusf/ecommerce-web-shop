import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

import { Products, Navbar, Cart } from './components';

const App = () => {
  // use the useState hook
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    // set the products
    setProducts(data);
  };

  const fetchCart = async () => {
    // retrieve the cart and set it to the state
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  // use the useEffect hook
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  // console.log(products);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Products products={products} onAddToCart={handleAddToCart} />
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default App;
