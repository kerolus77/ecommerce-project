import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { CheckoutHeader } from "./CheckoutHeader";
import "./CheckoutPage.css";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);

  useEffect(() => {
    axios
      .get("/api/delivery-options")
      .then((response) => setDeliveryOption(response.data));

    axios
      .get("/api/payment-summary")
      .then((response) => setPaymentSummary(response.data));
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/cart-favicon.png" />

      <title>Checkout</title>

      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {cart.map((item) => {
              const selectedDeliveryOption = deliveryOptions.find(
                (option) => option.id === item.deliveryOptionId,
              );
              return (
                <div key={item.product_id} className="cart-item-container">
                  <div className="delivery-date">
                    Delivery date:
                    {dayjs(selectedDeliveryOption.estimatedDeliveryTime).format(
                      "dddd, MMMM D",
                    )}
                  </div>

                  <div className="cart-item-details-grid">
                    <img
                      className="product-image"
                      src={item.product.imageUrls[0]}
                    />

                    <div className="cart-item-details">
                      <div className="product-name">{item.product.name}</div>
                      <div className="product-price">${item.product.price}</div>
                      <div className="product-quantity">
                        <span>
                          Quantity:{" "}
                          <span className="quantity-label">
                            {item.quantity}
                          </span>
                        </span>
                        <span className="update-quantity-link link-primary">
                          Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                          Delete
                        </span>
                      </div>
                    </div>

                    <div className="delivery-options">
                      <div className="delivery-options-title">
                        Choose a delivery option:
                      </div>
                      {deliveryOptions.map((option) => {
                        const price =
                          option.price === 0
                            ? "FREE Shipping"
                            : `$${option.price} - Shipping`;
                        return (
                          <div key={option.id} className="delivery-option">
                            <input
                              type="radio"
                              checked
                              className="delivery-option-input"
                              name="delivery-option-1"
                            />
                            <div>
                              <div className="delivery-option-date">
                                {dayjs(option.estimatedDeliveryTime).format(
                                  "dddd, MMMM D",
                                )}
                              </div>
                              <div className="delivery-option-price">
                                {price}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="payment-summary">
            <div className="payment-summary-title">Payment Summary</div>

            {paymentSummary && (
              <>
                <div className="payment-summary-row">
                  <div>Items ({paymentSummary.totalItems}):</div>
                  <div className="payment-summary-money">
                    ${paymentSummary.itemsTotal.toFixed(2)}
                  </div>
                </div>

                <div className="payment-summary-row">
                  <div>Shipping &amp; handling:</div>
                  <div className="payment-summary-money">
                    ${paymentSummary.shippingTotal.toFixed(2)}
                  </div>
                </div>

                <div className="payment-summary-row subtotal-row">
                  <div>Total before tax:</div>
                  <div className="payment-summary-money">
                    ${paymentSummary.subtotal.toFixed(2)}
                  </div>
                </div>

                <div className="payment-summary-row">
                  <div>Estimated tax (10%):</div>
                  <div className="payment-summary-money">
                    ${paymentSummary.tax.toFixed(2)}
                  </div>
                </div>

                <div className="payment-summary-row total-row">
                  <div>Order total:</div>
                  <div className="payment-summary-money">
                    ${paymentSummary.total.toFixed(2)}
                  </div>
                </div>

                <button className="place-order-button button-primary">
                  Place your order
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
