import dayjs from "dayjs";
import { DeliveryOptions } from "./DeliveryOptions";
import axios from "axios";
export function OrderSummary({ cart, deliveryOptions, loadCart }) {
  return (
    <div className="order-summary">
      {cart.map((item) => {
        const selectedDeliveryOption = deliveryOptions.find(
          (option) => option.id === item.deliveryOptionId,
        );

        const deleteCartItem = async () => {
          await axios.delete(`/api/cart-items/${item.productId}`);
          await loadCart();
        };
        return (
          <div key={item.product_id} className="cart-item-container">
            <div className="delivery-date">
              Delivery date:
              {dayjs(selectedDeliveryOption.estimatedDeliveryTime).format(
                "dddd, MMMM D",
              )}
            </div>

            <div className="cart-item-details-grid">
              <img className="product-image" src={item.product.imageUrls[0]} />

              <div className="cart-item-details">
                <div className="product-name">{item.product.name}</div>
                <div className="product-price">${item.product.price}</div>
                <div className="product-quantity">
                  <span>
                    Quantity:{" "}
                    <span className="quantity-label">{item.quantity}</span>
                  </span>
                  <span className="update-quantity-link link-primary">
                    Update
                  </span>
                  <span
                    className="delete-quantity-link link-primary"
                    onClick={deleteCartItem}
                  >
                    Delete
                  </span>
                </div>
              </div>

              <DeliveryOptions
                cartItem={item}
                deliveryOptions={deliveryOptions}
                loadCart={loadCart}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
