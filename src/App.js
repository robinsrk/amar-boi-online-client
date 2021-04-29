import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import React, { createContext, useState } from "react";
import { MDBContainer } from "mdbreact";
import Admin from "./components/Admin/Admin";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Orders from "./components/Orders/Orders";
import CheckOut from "./components/CheckOut/CheckOut";
import ManageBooks from "./components/ManageBooks/ManageBooks";
import AddBooks from "./components/AddBooks/AddBooks";
export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <MDBContainer fluid>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <PrivateRoute path="/admin/manage">
              <ManageBooks></ManageBooks>
            </PrivateRoute>
            <PrivateRoute path="/admin/addBook">
              <AddBooks></AddBooks>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/orders/">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/checkout/:id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </userContext.Provider>
    </MDBContainer>
  );
}

export default App;
