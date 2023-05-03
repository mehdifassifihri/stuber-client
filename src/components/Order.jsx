import React, { useState, useEffect } from "react";
import Ordercart from "./Ordercart";
import Notification from "../assets/notification.png";
import "../css/order.css";
import axios from "axios";

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/Order")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="order h-full">
      <div className="flex justify-between  bg-white sticky top-0">
        <p className="text-black text-2xl">Orders</p>
      </div>
      <div>
        {orders.map((e) => (
          <Ordercart
            key={e.id}
            orderid={e.id}
            parent={e.parent.name}
            child={e.student.name}
            latitude={e.start.latitude}
            longitude={e.start.longitude}
          />
        ))}
      </div>
    </div>
  );
};

export default Order;
