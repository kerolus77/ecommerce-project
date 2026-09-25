import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./OrderPage.css";
import { OrdersGrid } from "./OrdersGrid";

export function OrderPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function getOrders() {
      const response = await axios.get("/api/orders");
      setOrders(response.data);
    }
    getOrders();
  }, []);

  return (
    <>
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid orders={orders} />
      </div>
    </>
  );
}
