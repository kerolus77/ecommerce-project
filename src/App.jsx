import { Route, Routes } from "react-router";
import { CheckoutPage } from "./pages/CheckoutPage";
import { Home } from "./pages/Home";
import { OrderPage } from "./pages/OrderPage";

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
