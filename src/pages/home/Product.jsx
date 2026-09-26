import { useState } from "react";
import axios from "axios";
const ratingImages = import.meta.glob("../../assets/ratings/*.png", {
  eager: true,
  import: "default",
  query: "?url",
});
export function Product({ product, getCartItems }) {
  const [selectedQuantities, setSelectedQuantities] = useState(1);

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img
          className="product-image"
          src={`images/products/${product.imageUrls[0]}`}
        />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={
            ratingImages[
              `../../assets/ratings/rating-${Math.round(
                Number(product.averageRating) * 10,
              )}.png`
            ]
          }
          alt={`${product.averageRating} stars`}
        />
        <div className="product-rating-count link-primary">
          {product.ratingCount}
        </div>
      </div>

      <div className="product-price">${product.price}</div>

      <div className="product-quantity-container">
        <select
          value={selectedQuantities}
          onChange={(e) => {
            setSelectedQuantities(Number(e.target.value));
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div className="added-to-cart">
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button
        className="add-to-cart-button button-primary"
        onClick={async () => {
          await axios.post("/api/add-to-cart", {
            productId: product.id,
            quantity: selectedQuantities,
          });
          await getCartItems();
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
