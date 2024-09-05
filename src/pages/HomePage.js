import { useSearchParams } from 'react-router-dom';
import Header from '../components/header';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';

function HomePage() {
  const [products, setProducts] = useState([]);

  let [searchParams, setSearchParam] = useSearchParams();
  useEffect(() => handleSearch(searchParams.get('q') || ""), [searchParams.get('q')]);


  const handleSearch = (value) => {
    setSearchParam({'q': value})
    fetch(`https://dummyjson.com/products/search?q=${value}`)
      .then(res => res.json())
      .then(res => setProducts(res.products));
  }

  return (
    <>
      <Header handleSearch={handleSearch} defaultSearch={searchParams.get('q') || ''} />
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </>
  );
}

export default HomePage;
