import Header from "../Header/Header";
import { MDBBtn, MDBContainer, MDBIcon } from "mdbreact";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import "./Login.css";
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from "../../App";
import React, { useState, useContext } from "react";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const location = useLocation();
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const [user, setUser] = useState({
    isLoggedIn: false,
    newUser: false,
    name: "",
    email: "",
    photo: "",
    password: "",
    confirm: "",
  });
  const history = useHistory();
  const { from } = location.state || { from: { pathname: "/" } };
  const handleSubmit = (event) => {
    if (user.newUser && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
          const signedInUser = {
            isSignedIn: true,
            newUser: false,
            name: user.name,
            email: user.email,
            photo: user.photoURL,
          };
          setUser(signedInUser);
          setLoggedInUser(signedInUser);
          history.replace(from);
        });
    } else if (!user.newUser && user.email && user.password) {
      if (user.confirm === user.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(user.email, user.password)
          .then((result) => {
            const { displayName, photoURL, email } = result.user;
            const signedInUser = {
              isSignedIn: true,
              newUser: false,
              name: displayName,
              email: email,
              photo: photoURL,
            };
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch((errror) => {
            console.log(errror);
          });
      } else {
        alert("Password doesn't match");
      }
    }
    event.preventDefault();
  };
  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      isFieldValid = /\d{1}/.test(event.target.value);
    }
    if (event.target.name === "confirm") {
      isFieldValid = user.password === event.target.value;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    } else {
      isFieldValid = false;
    }
  };
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, photoURL, email } = result.user;
        console.log(result);
        const signedInUser = {
          isSignedIn: true,
          newUser: false,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleNewUserButton = () => {
    const newUserInfo = user.newUser ? false : true;
    const userInfo = {
      isSignedIn: false,
      newUser: newUserInfo,
      name: "",
      email: "",
      photo: "",
      password: "",
    };
    setUser(userInfo);
  };
  return (
    <div>
      <Header></Header>
      <MDBContainer className="mt-5 mb-5 pt-5 pb-5 form align-items-center">
        <form onSubmit={handleSubmit}>
          {user.newUser ? (
            <p className="form-title">Sign up</p>
          ) : (
            <p className="form-title">Sign in</p>
          )}
          {user.newUser && (
            <input
              className="input"
              onBlur={handleBlur}
              name="name"
              required
              type="text"
              placeholder="Enter your name"
            />
          )}
          <input
            className="input"
            onBlur={handleBlur}
            name="email"
            type="email"
            required
            placeholder="Enter your email"
          />
          <input
            className="input"
            onBlur={handleBlur}
            name="password"
            type="password"
            required
            placeholder="Enter your password"
          />
          {user.newUser && (
            <input
              className="input"
              onBlur={handleBlur}
              name="confirm"
              type="password"
              placeholder="Confirm password"
              required
            />
          )}
          <MDBBtn outline className="submit-button" type="submit">
            {user.newUser ? <p>Sign up</p> : <p>Sign in</p>}
          </MDBBtn>
        </form>
        <p>
          New user?
          <span
            className="ml-2"
            onClick={handleNewUserButton}
            style={{ color: "grey", cursor: "pointer" }}
          >
            <u>click here</u>
          </span>
        </p>
        <div>
          <MDBBtn onClick={handleGoogleSignIn} color="deep-orange">
            <MDBIcon
              fab
              icon="google-plus"
              className="pr-3"
              style={{ fontSize: "20px" }}
            ></MDBIcon>
            <span> Continue with google</span>
          </MDBBtn>
          <br />
        </div>
      </MDBContainer>
    </div>
  );
};
export default Login;
