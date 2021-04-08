import React from "react";
import "./Sidebar.css";
import { MDBIcon, MDBLink } from "mdbreact";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <MDBLink to="/admin/manage" className="text-white">
            <MDBIcon className="pr-1" icon="table" />
            Manage Book
          </MDBLink>
        </li>
        <li>
          <MDBLink to="/admin/addBook" className="text-white">
            <MDBIcon className="pr-2" icon="plus" />
            Add Book
          </MDBLink>
        </li>
        <li>
          <MDBLink to="/admin/editBook" className="text-white">
            <MDBIcon className="pr-1" far icon="edit" />
            Edit Book
          </MDBLink>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
