import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../Images/Books-icon.png";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
} from "mdbreact";
import { userContext } from "../../App";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  // console.log(loggedInUser);
  return (
    <div>
      <MDBNavbar dark expand="md">
        <MDBNavbarBrand>
          <img src={logo} style={{ width: "40px" }} alt="logo"></img>
          <strong className="white-text">Amar-Boi</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          <MDBNavbarNav right className="d-flex align-items-center">
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/orders">Orders</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/admin">Admin</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              {loggedInUser.isSignedIn ? (
                <div
                  className="d-flex align-items-center"
                  style={{ alignItems: "center" }}
                >
                  <img
                    src={loggedInUser.photo}
                    alt="profile-pic"
                    style={{ width: "40px" }}
                    className="img-fluid mr-2 rounded-circle img-thumbnail"
                  />
                  <p style={{ color: "white" }}>{loggedInUser.name}</p>
                </div>
              ) : (
                <MDBNavLink to="/login">
                  <MDBBtn gradient="blue" size="sm" className="login-btn">
                    Login
                  </MDBBtn>
                </MDBNavLink>
              )}
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
  );
};
export default Header;
