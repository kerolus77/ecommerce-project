import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { Home } from "./pages/home/Home";
import { OrderPage } from "./pages/orders/OrderPage";
import { PageNotFoundPage } from "./pages/page-not-found/PageNotFoundPage";
import { TrackingOrderPage } from "./pages/tracking-order/TrackingOrderPage";

function App() {
  const [cart, setCart] = useState([]);

  const fetchCartItems = async () => {
    const response = await axios.get("/api/cart-items");
    setCart(response.data);
  };
  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <Routes>
      <Route
        index
        element={<Home cart={cart} getCartItems={fetchCartItems} />}
      />
      <Route
        path="checkout"
        element={<CheckoutPage cart={cart} loadCart={fetchCartItems} />}
      />
      <Route path="orders" element={<OrderPage cart={cart} />} />
      <Route path="tracking-order" element={<TrackingOrderPage />} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  );
}
export default App;
