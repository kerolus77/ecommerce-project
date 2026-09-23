import { Route, Routes } from "react-router";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { Home } from "./pages/home/Home";
import { OrderPage } from "./pages/orders/OrderPage";
import { PageNotFoundPage } from "./pages/page-not-found/PageNotFoundPage";
import { TrackingOrderPage } from "./pages/tracking-order/TrackingOrderPage";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking-order" element={<TrackingOrderPage />} />
      <Route path="*" element={<PageNotFoundPage />} />
    </Routes>
  );
}
export default App;
