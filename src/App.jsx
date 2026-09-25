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

  useEffect(() => {
    axios
      .get("/api/cart-items")
      .then((response) => setCart(response.data))
      .catch(() => setCart([]));
  }, []);

  return (
    <Routes>
      <Route index element={<Home cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrderPage cart={cart} />} />
      <Route path="tracking-order" element={<TrackingOrderPage />} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  );
}
export default App;
