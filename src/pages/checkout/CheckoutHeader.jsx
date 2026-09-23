import { Link } from "react-router";
import checkoutLockIcon from "../../assets/icons/checkout-lock-icon.png";
import logo from "../../assets/logo-black.png";
import "./CheckoutHeader.css";
export function CheckoutHeader() {
  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
            <img className="mobile-logo" src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (
          <Link className="return-to-home-link" to="/">
            3 items
          </Link>
          )
        </div>

        <div className="checkout-header-right-section">
          <img src={checkoutLockIcon} alt="Lock" />
        </div>
      </div>
    </div>
  );
}
