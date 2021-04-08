import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import Header from "../Header/Header";
const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://vast-woodland-42956.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  });

  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div style={{ color: "white", width: "auto" }}>
          <h4>All available books {books.length}</h4>
          <MDBTable striped className="text-white" style={{ color: "white" }}>
            <MDBTableHead color="primary-color">
              <tr>
                <th>Book name</th>
                <th>Author name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {books.map((book) => (
                <tr>
                  <th>{book.name}</th>
                  <th>{book.author}</th>
                  <th>$ {book.price}</th>
                  <th>
                    <MDBBtn size="sm" color="primary" className="p-2">
                      <MDBIcon size="lg" icon="plus-square" />
                    </MDBBtn>
                    <MDBBtn size="sm" color="danger" className="p-2">
                      <MDBIcon size="lg" icon="trash-alt" />
                    </MDBBtn>
                  </th>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </div>
  );
};
export default ManageBooks;
