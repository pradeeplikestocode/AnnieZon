import Header from '../components/header';
import ProductCard from '../components/ProductCard';
import { useState } from 'react';

function HomePage() {

  const [products, setProducts] = useState([]);

  const handleSearch = (value) => {
    console.log("Search: outside: " + value);
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then(res => res.json())
      .then(res => setProducts(res.products));
  }

  return (
    <>
      <Header handleSearch={handleSearch} />
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </>
  );
}

export default HomePage;
