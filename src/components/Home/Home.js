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
    fetch("http://localhost:3300/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  });

  return (
    <div>
      <Header></Header>
      <div className="d-flex justify-content-center">
        <SearchBox></SearchBox>
      </div>
      <MDBRow>
        {books.map((book) => (
          <MDBCol sm="4">
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
                  <MDBBtn color="primary" href="#">
                    But now
                  </MDBBtn>
                </MDBLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>
      {/* <MDBCol> */}
      {/*   <MDBCard style={{ width: "22rem" }}> */}
      {/*     <MDBCardImage */}
      {/*       className="img-fluid" */}
      {/*       src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" */}
      {/*       waves */}
      {/*     /> */}
      {/*     <MDBCardBody> */}
      {/*       <MDBCardTitle>Card title</MDBCardTitle> */}
      {/*       <MDBCardText> */}
      {/*         Some quick example text to build on the card title and make up the */}
      {/*         bulk of the card&apos;s content. */}
      {/*       </MDBCardText> */}
      {/*       <MDBBtn href="#">Buy now</MDBBtn> */}
      {/*     </MDBCardBody> */}
      {/*   </MDBCard> */}
      {/* </MDBCol> */}
    </div>
  );
};

export default Home;
