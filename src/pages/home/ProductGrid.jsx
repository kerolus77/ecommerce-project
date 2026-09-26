import { Product } from "./Product";

export function ProductGrid({ products, getCartItems }) {
  return (
    <div className="products-grid">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          getCartItems={getCartItems}
        />
      ))}
    </div>
  );
}
