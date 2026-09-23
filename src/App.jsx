import { Route, Routes } from "react-router";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { Home } from "./pages/home/Home";
import { OrderPage } from "./pages/orders/OrderPage";
import { PageNotFoundPage } from "./pages/page-not-found/PageNotFoundPage";
import { TrackingOrderPage } from "./pages/tracking-order/TrackingOrderPage";
import { useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);
  axios.get("/api/cart-items").then((response) => setCart(response.data));
  return (
    <Routes>
      <Route index element={<Home cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking-order" element={<TrackingOrderPage />} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  );
}
export default App;
