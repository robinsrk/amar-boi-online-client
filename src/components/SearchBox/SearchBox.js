import React, { useState } from "react";
import "./SearchBox.css";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
const SearchBox = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <MDBCol md="12" className="d-flex justify-content-center">
          <MDBFormInline className="md-form mr-auto mb-4">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
              onBlur={handleSearch}
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
  );
};
export default SearchBox;
