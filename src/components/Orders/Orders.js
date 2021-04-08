import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import Header from "../Header/Header";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
const Orders = () => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(
      "https://vast-woodland-42956.herokuapp.com/orders?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [loggedInUser.email]);

  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center" }}>Hello {loggedInUser.name}</h1>
      <h3>These are the orders that you have made {orders?.length}</h3>

      <MDBTable striped className="text-white" style={{ color: "white" }}>
        <MDBTableHead color="primary-color">
          <tr>
            <th>Book name</th>
            <th>Author name</th>
            <th>Price</th>
            <th>Order date</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {orders.map((order) => (
            <tr>
              <th>{order.name}</th>
              <th>{order.author}</th>
              <th>$ {order.price}</th>
              <th>{order.date}</th>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
};
export default Orders;
