import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { MDBInput, MDBBtn } from "mdbreact";
const ManageBooks = () => {
  return (
    <div>
      {/* <form method="post" action="http://localhost:3300/addBook"> */}
      <form method="post" action="http://localhost:3300/addBook">
        <MDBInput label="Book name" name="name" outline icon="signature" />
        <MDBInput
          label="Author Name"
          name="author"
          outline
          icon="user-circle"
        />
        <MDBInput label="Price" name="price" outline icon="dollar-sign" />
        <MDBBtn color="primary" type="submit">
          Add Book
        </MDBBtn>
      </form>
    </div>
  );
};
export default ManageBooks;
