import React from "react";
import { MDBInput, MDBBtn } from "mdbreact";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./AddBooks.css";
const AddBooks = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div>
          <form
            method="post"
            action="https://vast-woodland-42956.herokuapp.com/addBook"
          >
            <MDBInput label="Book name" name="name" outline icon="signature" />
            <MDBInput
              label="Author Name"
              name="author"
              outline
              icon="user-circle"
            />
            <MDBInput label="Price" name="price" outline icon="dollar-sign" />
            <MDBInput label="PhotoUrl" name="photo" outline icon="image" />
            <MDBBtn className="add-btn" gradient="purple" type="submit">
              Add Book
            </MDBBtn>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddBooks;
