// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import p from './blood.jpg';

export default function Navbar({ onSearch }) {
  const [searchText, setSearchText] = useState("");
  const [blood, setBlood] = useState("Blood Group"); // Default value or just ""

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  // Function to handle blood group change
  const handleBloodChange = (event) => {
    setBlood(event.target.value);
  };

  const handleClickNavbar = (event) => {
    setSearchText("");
    onSearch("");
  };

  // Function to handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Assuming you want to use both searchText and blood in the onSearch function
    // You might need to adjust onSearch to handle both these values.
    onSearch(searchText, blood);
  };

  return (
    <nav style={{ zIndex: "11", position:"fixed", width:"100%",  borderWidth:"0px"}} className="navbar navbar-light bg-light">
      <div  style={{backgroundColor:"#eee9e9"}} className="container-fluid">
        <div className="d-flex">
          <Link className="navbar-brand" to="/" onClick={handleClickNavbar}>
          <img height="60px" width="100%" src={p} />
          </Link>
          <Link style={{paddingTop:"20px"}} className="navbar-brand" to="/about">
            About
          </Link>
        </div>

        <form className="d-flex" onSubmit={handleFormSubmit}>
          <label htmlFor="bloodGroup" style={{marginInlineEnd:"10px", paddingTop:"6px", width:"200px"}}>Blood Group:</label>
          <select
            name="bloodGroup"
            id="bloodGroup"
            style={{marginInlineEnd:"10px"}}
            value={blood}
            onChange={handleBloodChange}
          >
           
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="O+">O+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
            <option value="O-">O-</option>
          </select>

          <input
            className="form-control me-2"
            type="search"
            placeholder="Input City Name"
            aria-label="Search"
            value={searchText}
            onChange={handleSearchInputChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
