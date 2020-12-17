import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';

import { Products, Navbar } from './components';

const App = () => {
  // use the useState hook
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    // set the products
    setProducts(data);
  };

  // use the useEffect hook
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <Navbar />
      <Products products={products} />
    </div>
  );
};

export default App;
