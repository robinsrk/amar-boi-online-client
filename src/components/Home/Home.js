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
} from "mdbreact";
import "./Home.css";
import SearchBox from "../SearchBox/SearchBox";
const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://vast-woodland-42956.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  });

  return (
    <div>
      <Header></Header>
      <div className="d-flex justify-content-center">
        <SearchBox></SearchBox>
      </div>
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
