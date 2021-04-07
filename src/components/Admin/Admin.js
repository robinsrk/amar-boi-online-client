import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import ManageBooks from "../ManageBooks/ManageBooks";
import AddBooks from "../AddBooks/AddBooks";
const Admin = () => {
  return (
    <div>
      <Header></Header>
      <div className="d-flex">
        <Sidebar></Sidebar>
        <AddBooks></AddBooks>
      </div>
    </div>
  );
};

export default Admin;
