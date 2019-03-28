import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Buttons } from "../../components";

function Search() {
  return (
    <div className="Search">
    
      <div>
        <label for="name">Enter your name:</label>
        <input type="text" id="name" />
      </div>

      <div>
        <label for="phone">Enter your phone number:</label>
        <input type="tel" id="phone" />
      </div>

      <div>
        <label for="pass">Password (8 characters minimum):</label>
        <input
          type="password"
          id="pass"
          name="password"
          minlength="8"
          required
        />
      </div>

      <div>
        <Buttons>Search</Buttons>
      </div>

      <div className="Button">
        <Link to="/front">
          <nav>Back</nav>
        </Link>
      </div>

    </div>
  );
}

export default Search;
