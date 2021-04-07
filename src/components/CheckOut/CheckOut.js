import React from "react";
import { useParams } from "react-router";
import Header from "../Header/Header";
const CheckOut = () => {
  // const { _id } = useParams();
  return (
    <div>
      <Header></Header>
      <h1>This is checkout</h1>
    </div>
  );
};
export default CheckOut;
