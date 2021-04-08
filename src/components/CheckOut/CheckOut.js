import {
  MDBLink,
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { userContext } from "../../App";
import Header from "../Header/Header";
const CheckOut = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://vast-woodland-42956.herokuapp.com/book/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data[0]));
  }, [id]);
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const { name, author, price, photo } = book;
  const handleCheckout = () => {
    const today = new Date();
    let minute = today.getMinutes();
    let format = "AM";
    let hour = today.getHours();
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (hour > 11) {
      format = "PM";
      if (hour > 12) {
        hour -= 12;
      }
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    const date =
      today.getDate() +
      "/" +
      today.getMonth() +
      "/" +
      today.getFullYear() +
      " " +
      hour +
      ":" +
      minute +
      " " +
      format;
    const newOrder = { ...loggedInUser, name, author, price, photo, date };
    fetch("https://vast-woodland-42956.herokuapp.com/addOrder", {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };
  return (
    <div>
      <Header></Header>
      <h1 className="text-white mt-3 mb-3">CheckOut</h1>
      <MDBTable className="text-white">
        <MDBTableHead style={{ backgroundColor: "#9d57ff" }}>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <th>{book.name}</th>
            <th>1</th>
            <th>$ {book.price}</th>
          </tr>
          <tr>
            <th>Total</th>
            <th>1</th>
            <th>$ {book.price}</th>
          </tr>
        </MDBTableBody>
      </MDBTable>
      <MDBLink to="/orders">
        <MDBBtn className="" gradient="purple" onClick={handleCheckout}>
          Checkout
        </MDBBtn>
      </MDBLink>
    </div>
  );
};
export default CheckOut;
