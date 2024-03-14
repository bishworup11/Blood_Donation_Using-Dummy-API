// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onSearch }) {
  // Updated prop name
  const [searchText, setSearchText] = useState("");
  const [blood, setBlood] = useState("");

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClickNavber = (event) => {
    setSearchText("");
    onSearch("");
  };

  // Function to handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(searchText);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <div className=" d-flex ">
          <Link className="navbar-brand" to="/" onClick={handleClickNavber}>
            Navbar
          </Link>
          <Link className="navbar-brand" to="/about">
            About
          </Link>
        </div>

        <form className="d-flex" onSubmit={handleFormSubmit}>
          <label for="cars" style={{marginInlineEnd:"10px"}} >Blood Group:</label>
          <select name="cars" id="cars" style={{marginInlineEnd:"10px"}}>
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
