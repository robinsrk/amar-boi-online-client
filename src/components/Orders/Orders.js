import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import Header from "../Header/Header";
const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/orders")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center" }}>Hello {loggedInUser.name}</h1>
      <h3>These are the orders that you have made {order.length}</h3>
      {order.map((book) => (
        <li>{book.name}</li>
      ))}
    </div>
  );
};
export default Orders;
