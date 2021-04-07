import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";
const AddBooks = () => {
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
        {/* <MDBInput label="Information" name="info" outline icon="info-circle" /> */}
        <MDBInput label="PhotoUrl" name="photo" outline icon="image" />
        <MDBBtn color="primary" type="submit">
          Add Book
        </MDBBtn>
      </form>
    </div>
  );
};
export default AddBooks;
