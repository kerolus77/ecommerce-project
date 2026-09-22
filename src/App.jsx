import { Route, Routes } from "react-router"
import { CheckoutPage } from "./pages/CheckoutPage"
import { Home } from "./pages/Home"

function App(){
return (
  <Routes>
    <Route index element={<Home />} />
    <Route path="checkout" element={<CheckoutPage />} />

  </Routes>
)
}
export default App