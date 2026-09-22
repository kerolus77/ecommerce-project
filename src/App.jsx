import { Route, Routes } from "react-router";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { Home } from "./pages/home/Home";
import { OrderPage } from "./pages/orders/OrderPage";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrderPage />} />
    </Routes>
  );
}
export default App;
