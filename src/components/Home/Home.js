import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import {
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRow,
  MDBLink,
  MDBFormInline,
} from "mdbreact";
import "./Home.css";
const Home = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3300/books?search=" + search)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [search]);

  return (
    <div>
      <Header></Header>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center">
          <MDBCol md="12" className="d-flex justify-content-center">
            <MDBFormInline className="md-form mr-auto mb-4">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearch}
              />
              <MDBBtn
                gradient="blue"
                size="sm"
                type="submit"
                className="mr-auto search-btn"
              >
                Search
              </MDBBtn>
            </MDBFormInline>
          </MDBCol>
        </div>
      </div>
      {books.length === 0 && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "auto",
        }}
      >
        <MDBRow center>
          {books?.map((book) => (
            <div
              style={{
                justifyContent: "center",
              }}
            >
              <MDBCol lg="4" md="6" sm="12" center>
                <MDBCard
                  className="mb-5"
                  style={{
                    width: "22rem",
                    backgroundColor: "#282a36",
                    borderRadius: "20px",
                    minHeight: "700px",
                  }}
                >
                  <MDBCardImage
                    className="img-fluid rounded"
                    src={book.photo}
                    waves
                    style={{ height: "500px" }}
                  />
                  <MDBCardBody style={{ color: "white" }}>
                    <MDBCardTitle>{book.name}</MDBCardTitle>
                    <MDBCardText>{book.author}</MDBCardText>
                    <MDBLink to={"/checkout/" + book._id}>
                      <MDBBtn color="primary">Buy now</MDBBtn>
                    </MDBLink>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </div>
          ))}
        </MDBRow>
      </div>
    </div>
  );
};

export default Home;
