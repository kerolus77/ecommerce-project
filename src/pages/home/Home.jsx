import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./Home.css";
import { ProductGrid } from "./ProductGrid";

export function Home({ cart, getCartItems }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => setProducts(response.data))
      .catch(() => setError("Unable to load products. Please try again."));
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />

      <title>Ecommerce Project</title>

      <Header cart={cart} />

      <div className="home-page">
        {error && <p>{error}</p>}
        <ProductGrid products={products} getCartItems={getCartItems} />
      </div>
    </>
  );
}
